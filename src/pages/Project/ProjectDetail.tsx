import React, { useEffect, useState } from "react";
import { Avatar, Tooltip } from "antd";
import * as Yup from "yup";
import { DispathType, RootState } from "../../redux/config";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import Button from "../../components/Button/Button";
import TaskCard from "../../components/TaskDetail/TaskCard";
import TaskBox from "../../components/TaskDetail/TaskBox";
import { useDispatch, useSelector } from "react-redux";
import { getStatusApi } from "../../redux/statusReducer/statusReducer";
import {
  assignUserProject,
  createTask,
  getLstTaskAction,
  getProjectDetailApi,
  getTaskTypeApi,
  removeUserFromProject,
} from "../../redux/projectReducer/projectReducer";
import { useParams } from "react-router-dom";
import { CreateTaskType, LstTaskDeTail, UserModel } from "../../types/global";
import { getUserApi } from "../../redux/userReducer/userReducer";
import ModalBase from "../../components/Modal/ModalBase";
import { useToast } from "../../components/Toast";
import { getStoreJson, USER_LOGIN } from "../../util/setting";
import { Form, Formik } from "formik";
import FormRow from "../../components/common/FormRow/FormRow";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import Label from "../../components/Label/Label";
import Dropdown from "../../components/Dropdown/Dropdow";
import Select from "../../components/Dropdown/Select";
import List from "../../components/Dropdown/List";
import Option from "../../components/Dropdown/Option";
import Input from "../../components/Input/Input";
import useClickOutside from "../../hooks/useClickOutside";
import SelectTag from "../../components/Dropdown/SelectTag";
import OptionTag from "../../components/Dropdown/OptionTag";
import ListTag from "../../components/Dropdown/ListTag";
import { getPriorityApi } from "../../redux/priorityReducer/priorityReducer";
import Slider from "../../components/Slider/Slider";
import TextTiny from "../../components/Input/TextTiny";

const ProjectDetail = () => {
  const params = useParams();
  const dispatch: DispathType = useDispatch();
  const { statuses } = useSelector((state: RootState) => state.statusReducer);
  const { projectDetail, lstTask } = useSelector(
    (state: RootState) => state.projectReducer
  );
  const { userAll } = useSelector((state: RootState) => state.userReducer);

  const { members, id, projectName, creator } = projectDetail;
  useEffect(() => {
    dispatch(getStatusApi());
    dispatch(getProjectDetailApi(params));
    dispatch(getUserApi());
  }, [dispatch, params]);

  async function changeStatusName(
    item: LstTaskDeTail,
    statusId: string,
    taskId: number
  ) {
    const idx = lstTask.findIndex((it) => it.statusId === item.statusId);
    if (idx === -1) {
      return lstTask;
    }

    const updatedLstTask = lstTask.map((it, i) => {
      if (i !== idx) {
        return it;
      }

      const updatedLstTaskDetail = it.lstTaskDeTail.map((task) => {
        if (task.taskId === taskId) {
          return {
            ...task,
            statusId,
          };
        }
        return task;
      });

      return {
        ...it,
        lstTaskDeTail: updatedLstTaskDetail,
      };
    });
    await dispatch(getLstTaskAction(updatedLstTask));
    dispatch(getProjectDetailApi(params));
  }

  // Admin
  const admin = getStoreJson(USER_LOGIN);
  const { add } = useToast();

  const [openModalMember, setOpenModalMember] = useState<boolean>(false);
  const [openModalCreateTask, setOpenModalCreateTask] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const searchFilter = (data: UserModel[]) => {
    return data?.filter((item) => item.name?.toLowerCase().includes(search));
  };
  const handleToggleModalMember = async () => {
    setIsLoading(true);
    await setOpenModalMember(true);
    setIsLoading(false);
  };

  // Create task
  const handleOpenModal = async () => {
    setIsLoading(true);

    await dispatch(getTaskTypeApi());
    await dispatch(getStatusApi());
    await dispatch(getPriorityApi());
    setOpenModalCreateTask(true);
    setIsLoading(false);
  };
  const { priority: priorityAll } = useSelector(
    (state: RootState) => state.priorityReducer
  );
  const { taskType: taskTypeAll } = useSelector(
    (state: RootState) => state.projectReducer
  );
  const [addUser, setAddUser] = useState<UserModel[]>([]);
  const { nodeRef, show: userTag, setShow: setUserTag } = useClickOutside();

  const removeUser = (id: number) => {
    setAddUser(addUser.filter((item) => item.userId !== id));
  };
  const clearListUser = () => {
    setAddUser(addUser.slice(addUser.length, addUser.length));
  };

  const {
    show: status,
    setShow: setStatus,
    nodeRef: statusRef,
  } = useClickOutside();
  const {
    show: priority,
    setShow: setPriority,
    nodeRef: priorityRef,
  } = useClickOutside();
  const {
    show: taskType,
    setShow: setTaskType,
    nodeRef: taskTypeRef,
  } = useClickOutside();
  const handleToggleStatus = () => {
    setStatus(!status);
  };
  const handleTogglePriority = () => {
    setPriority(!priority);
  };
  const handleToggleTaskType = () => {
    setTaskType(!taskType);
  };

  const initialValues: CreateTaskType = {
    listUserAsign: [],
    taskName: "",
    description: "",
    statusId: "",
    originalEstimate: 0,
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
    projectId: id,
    typeId: 0,
    priorityId: 0,
  };
  return (
    <>
      {/* Modal create task */}
      {openModalCreateTask && (
        <ModalBase
          visible={openModalCreateTask}
          onClose={() => {
            setOpenModalCreateTask(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <div className="relative bg-white max-w-[900px] w-[9000px] max-h-[650px] h-[650px] overflow-x-hidden overflow-y-auto rounded-lg scrollbar-none shadow-sdSecondary">
              <>
                <div className="bg-white rounded-xl py-10 px-[66px]">
                  <div className="text-center">
                    <h1 className="py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
                      Create Task 🐱
                    </h1>

                    <Formik
                      initialValues={initialValues}
                      validationSchema={Yup.object().shape({
                        taskName: Yup.string().required(""),
                        statusId: Yup.string().required(""),
                        originalEstimate: Yup.string().required(""),
                        timeTrackingSpent: Yup.string().required(""),
                        timeTrackingRemaining: Yup.string().required(""),
                        typeId: Yup.string().required(""),
                        priorityId: Yup.string().required(""),
                      })}
                      onSubmit={async (
                        {
                          listUserAsign,
                          taskName,
                          description,
                          statusId,
                          originalEstimate,
                          timeTrackingSpent,
                          timeTrackingRemaining,
                          projectId,
                          typeId,
                          priorityId,
                        },
                        { setSubmitting, resetForm }
                      ) => {
                        if (admin.id === creator.id) {
                          listUserAsign = addUser.map((item) => item.userId);
                          timeTrackingRemaining =
                            originalEstimate - timeTrackingSpent;
                          setSubmitting(true);
                          await dispatch(
                            createTask({
                              listUserAsign,
                              taskName,
                              description,
                              statusId,
                              originalEstimate,
                              timeTrackingSpent,
                              timeTrackingRemaining,
                              projectId,
                              typeId,
                              priorityId,
                            })
                          );
                          await dispatch(getProjectDetailApi(params));
                          add({
                            type: "success",
                            message: "Create task successfully",
                            duration: 5000,
                            position: "topCenter",
                          });
                          resetForm();
                          setOpenModalCreateTask(false);
                        } else {
                          setOpenModalCreateTask(false);
                          add({
                            type: "warning",
                            message:
                              "Could not create task.You need a project first!",
                            duration: 5000,
                            position: "topCenter",
                          });
                        }
                      }}
                    >
                      {({ isSubmitting, errors, setFieldValue, values }) => {
                        const { priorityId, statusId, typeId } = values;
                        const placeholderPriority =
                          priorityId === 1
                            ? "🟥 High"
                            : priorityId === 2
                            ? "🟨 Medium"
                            : priorityId === 3
                            ? "🟩 Low"
                            : priorityId === 4
                            ? "🟩 Lowest"
                            : "Seclect a priority...";
                        const placeholderStatus =
                          statusId === "1"
                            ? "💙 BACKLOG"
                            : statusId === "2"
                            ? "🧡 SELECTED FOR DEVELOPMENT"
                            : statusId === "3"
                            ? "❤️ IN PROGRESS"
                            : statusId === "4"
                            ? "💚 DONE"
                            : "Seclect a status...";
                        const placeholderType =
                          typeId === 1
                            ? "🐞 BUG"
                            : typeId === 2
                            ? "✅ NEW TASK"
                            : "Seclect a type task...";
                        return (
                          <Form>
                            <FormGroup>
                              <Label htmlFor="taskName">Task name *</Label>
                              <Input
                                id="taskName"
                                name="taskName"
                                type="text"
                                placeholder="Please enter task name..."
                              />
                            </FormGroup>

                            <FormRow className="grid-cols-2">
                              <FormGroup>
                                <Label>Priority *</Label>
                                <Dropdown>
                                  <Select
                                    nodeRef={priorityRef}
                                    show={priority}
                                    placeholder={placeholderPriority}
                                    onClick={handleTogglePriority}
                                  />
                                  <List show={priority}>
                                    {priorityAll.map(
                                      ({ priorityId, priority }) => {
                                        const selected =
                                          priorityId === values.priorityId;
                                        return (
                                          <Option
                                            key={priorityId}
                                            className={
                                              selected
                                                ? "text-[#42526e] bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary bg-opacity-20"
                                                : ""
                                            }
                                            onClick={() => {
                                              setFieldValue(
                                                "priorityId",
                                                priorityId
                                              );
                                            }}
                                          >
                                            {priority}
                                          </Option>
                                        );
                                      }
                                    )}
                                  </List>
                                </Dropdown>
                              </FormGroup>
                              <FormGroup>
                                <Label>Task Type *</Label>
                                <Dropdown>
                                  <Select
                                    nodeRef={taskTypeRef}
                                    show={taskType}
                                    placeholder={placeholderType}
                                    onClick={handleToggleTaskType}
                                  />
                                  <List show={taskType}>
                                    {taskTypeAll.map(({ id, taskType }) => {
                                      const selected = id === values.typeId;
                                      return (
                                        <Option
                                          key={id}
                                          className={
                                            selected
                                              ? "text-[#42526e] bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary bg-opacity-20"
                                              : ""
                                          }
                                          onClick={() => {
                                            setFieldValue("typeId", id);
                                          }}
                                        >
                                          {taskType}
                                        </Option>
                                      );
                                    })}
                                  </List>
                                </Dropdown>
                              </FormGroup>
                            </FormRow>
                            <FormRow>
                              <FormGroup>
                                <FormGroup>
                                  <Label>Status *</Label>
                                  <Dropdown>
                                    <Select
                                      nodeRef={statusRef}
                                      show={status}
                                      placeholder={placeholderStatus}
                                      onClick={handleToggleStatus}
                                    />
                                    <List show={status}>
                                      {statuses.map(
                                        ({ statusId, statusName }) => {
                                          const selected =
                                            statusId === values.statusId;
                                          return (
                                            <Option
                                              key={statusId}
                                              className={
                                                selected
                                                  ? "text-[#42526e] bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary bg-opacity-20"
                                                  : ""
                                              }
                                              onClick={() => {
                                                setFieldValue(
                                                  "statusId",
                                                  statusId
                                                );
                                              }}
                                            >
                                              {statusName}
                                            </Option>
                                          );
                                        }
                                      )}
                                    </List>
                                  </Dropdown>
                                </FormGroup>
                              </FormGroup>
                              <FormGroup>
                                <Label>Assigness</Label>
                                <Dropdown>
                                  <SelectTag
                                    onClick={() => {
                                      setUserTag(!userTag);
                                    }}
                                    nodeRef={nodeRef}
                                    data={addUser}
                                    show={userTag}
                                    removeUser={removeUser}
                                    clearListUser={clearListUser}
                                    searchFilter={(
                                      e: React.FormEvent<HTMLInputElement>
                                    ) => {
                                      setSearch(e.currentTarget.value);
                                    }}
                                    placeholder="Search assigness ..."
                                  ></SelectTag>
                                  <ListTag show={userTag}>
                                    {searchFilter(userAll)?.map((user) => {
                                      const userExists = addUser.find(
                                        (u) => u.userId === user.userId
                                      );
                                      return (
                                        <div key={user.userId}>
                                          <OptionTag
                                            className={`${
                                              userExists
                                                ? "text-[#42526e]  bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary"
                                                : null
                                            }`}
                                            onClick={() => {
                                              if (userExists)
                                                setAddUser((s) =>
                                                  s.filter(
                                                    (u) =>
                                                      u.userId !== user.userId
                                                  )
                                                );
                                              else
                                                setAddUser(
                                                  (s) => s && [...s, user]
                                                );
                                            }}
                                          >
                                            <div className="flex items-center gap-x-3">
                                              <Avatar
                                                size={25}
                                                src={
                                                  <img
                                                    src={user.avatar}
                                                    alt="avatar"
                                                  />
                                                }
                                              />
                                              <span> {user.name}</span>
                                            </div>
                                            {userExists && (
                                              <span className="text-primary">
                                                <i className="fa-solid fa-check"></i>
                                              </span>
                                            )}
                                          </OptionTag>
                                        </div>
                                      );
                                    })}
                                  </ListTag>
                                </Dropdown>
                              </FormGroup>
                            </FormRow>
                            <FormRow className="grid-cols-3">
                              <FormGroup>
                                <Label>Time Tracking</Label>
                                <Slider
                                  name="Tracking"
                                  min={0}
                                  max={100}
                                  defaultValue={30}
                                ></Slider>
                              </FormGroup>
                              <FormGroup>
                                <Label>Original Estimate (hours)</Label>
                                <Input
                                  className="appearance-none bg-bgInput"
                                  id="originalEstimate"
                                  name="originalEstimate"
                                  type="number"
                                  placeholder="Original Estimate..."
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label>Time Spent (hours)</Label>
                                <Input
                                  className="appearance-none bg-bgInput"
                                  id="timeTrackingSpent"
                                  name="timeTrackingSpent"
                                  type="number"
                                  placeholder="Time Spent..."
                                />
                              </FormGroup>
                            </FormRow>

                            <FormGroup>
                              <Label>Description *</Label>
                              <TextTiny control="tiny-mce" name="description" />
                            </FormGroup>

                            <div className=" flex items-center justify-center">
                              <Button
                                type="submit"
                                className=" my-3"
                                kind="primary"
                              >
                                Add new task
                              </Button>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </>
            </div>
          )}
        </ModalBase>
      )}
      {/* Modal add member */}
      {openModalMember && (
        <ModalBase
          visible={openModalMember}
          onClose={() => {
            setOpenModalMember(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <div className="relative bg-white max-w-[750px] w-[750px] max-h-[650px] h-[650px] overflow-hidden rounded-lg shadow-sdSecondary">
              <div key={id + projectName}>
                <div className="flex items-start justify-between mx-5 mt-5">
                  <div className=" flex items-center gap-x-3">
                    <div className="text-text2 font-medium">ID :</div>
                    <span className="flex items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none">
                      {id}
                    </span>
                  </div>
                  <span
                    className="text-text2 hover:text-error select-none cursor-pointer"
                    onClick={() => {
                      setOpenModalMember(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
                <h2 className="mt-5 text-2xl text-center text-text5 font-bold ">
                  {projectName}
                </h2>
                <div className="flex items-start justify-between">
                  <div className="w-[55%] p-4 ">
                    <h3 className="text-text5 text-2xl font-mono font-semibold py-2 text-center">
                      Add member
                    </h3>

                    <div className="mt-3">
                      <input
                        className="p-4 outline-none w-full border border-gray-200 rounded"
                        type="text"
                        placeholder="Search user..."
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                          setSearch(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className="overflow-x-hidden overflow-y-auto max-h-[400px] mx-w-[600px] scrollbar-none border border-strock mt-3 rounded-lg">
                      {searchFilter(userAll).map(({ avatar, name, userId }) => {
                        return (
                          <div
                            key={userId}
                            className="flex items-center justify-between p-4 border-b border-strock"
                          >
                            <div className="flex items-center gap-x-2">
                              <Avatar
                                src={
                                  <img src={avatar} alt={`${name} avatar`} />
                                }
                              />
                              <span className="text-text1 max-w-[250px] font-medium truncate">
                                {name}
                              </span>
                            </div>
                            <button
                              onClick={async () => {
                                if (creator.id === admin.id) {
                                  await dispatch(
                                    assignUserProject({
                                      projectId: id,
                                      userId,
                                    })
                                  );
                                  await dispatch(getProjectDetailApi(params));
                                  await add({
                                    type: "success",
                                    message: `Add ${name} successfully`,
                                    duration: 3000,
                                    position: "bottomLeft",
                                  });
                                } else {
                                  setOpenModalMember(false);
                                  add({
                                    type: "warning",
                                    message:
                                      "Only the creator can add member in this project",
                                    duration: 3000,
                                    position: "bottomLeft",
                                  });
                                }
                              }}
                              className="text-white font-medium font-mono bg-blue-500 px-2 py-1 rounded-lg"
                            >
                              Add
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-[45%] p-4">
                    <h3 className="text-text5 text-2xl font-mono font-semibold py-2 text-center">
                      Remove member
                    </h3>

                    <div className="overflow-x-hidden overflow-y-auto border border-strock mt-3 rounded-lg max-h-[470px] scrollbar-none">
                      {members.map(({ avatar, name, userId }) => {
                        return (
                          <div
                            key={userId}
                            className="flex items-center justify-between p-4 border-b border-strock "
                          >
                            <div className="flex items-center gap-x-2">
                              <Avatar
                                src={
                                  <img src={avatar} alt={`${name} avatar`} />
                                }
                              />
                              <span className="text-text1 font-medium">
                                {name}
                              </span>
                            </div>
                            <button
                              onClick={async () => {
                                if (creator.id === admin.id) {
                                  await dispatch(
                                    removeUserFromProject({
                                      projectId: id,
                                      userId,
                                    })
                                  );
                                  await dispatch(getProjectDetailApi(params));

                                  await add({
                                    type: "success",
                                    message: `Delete ${name} successfully`,
                                    duration: 3000,
                                    position: "bottomLeft",
                                  });
                                } else {
                                  setOpenModalMember(false);
                                  add({
                                    type: "warning",
                                    message:
                                      "Only the creator can delete member in this project",
                                    duration: 3000,
                                    position: "bottomLeft",
                                  });
                                }
                              }}
                              className="text-white font-medium font-mono bg-error px-2 py-1 rounded-lg"
                            >
                              Remove
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              );
            </div>
          )}
        </ModalBase>
      )}
      <div className="bg-lite">
        <div className="bg-white rounded-3xl flex items-center justify-between py-8 px-10">
          <div className="flex items-center gap-x-5 md:w-auto">
            <HeaderSearch></HeaderSearch>

            <div className="flex items-center gap-x-2">
              <Avatar.Group
                maxCount={2}
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                }}
              >
                {members.map(({ name, avatar, userId }) => (
                  <Tooltip key={userId} title={name} placement="top">
                    <Avatar src={<img src={avatar} alt={`${name} avatar`} />} />
                  </Tooltip>
                ))}
              </Avatar.Group>
              <span
                onClick={() => {
                  handleToggleModalMember();
                }}
                className="w-[32px] h-[32px] rounded-full border border-dashed flex items-center justify-center text-text3 border-text3 hover:text-text2 hover:border-text2 cursor-pointer select-none transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <Button
              type="button"
              onClick={() => {
                handleOpenModal();
              }}
              kind="secondary"
              className="bg-secondary bg-opacity-20 hover:bg-opacity-40 transition-all text-secondary min-w-fit"
            >
              Create task
            </Button>
          </div>
        </div>
        {!!projectDetail ? (
          <div className="bg-lite flex-1 overflow-auto ">
            <main className="p-3 h-full flex items-start gap-x-5">
              {/* TODO */}
              {statuses.map((si, i) => {
                return (
                  <TaskBox key={i} name={si.statusName} id={si.statusId}>
                    {lstTask.map((item) => {
                      const lstTaskDeTail: LstTaskDeTail[] = item.lstTaskDeTail;
                      return lstTaskDeTail
                        .filter((ti) => ti.statusId === si.statusId)
                        .map((task, inx) => (
                          <TaskCard
                            key={task.taskId}
                            index={inx}
                            items={task}
                            changeStatusName={changeStatusName}
                          />
                        ));
                    })}
                  </TaskBox>
                );
              })}
            </main>
          </div>
        ) : (
          <div className="flex justify-center items-center bg-lite h-[400px]">
            <div className="loader bg-lite p-5 rounded-full flex space-x-3">
              <div className="w-5 h-5 bg-error rounded-full animate-bounce" />
              <div className="w-5 h-5 bg-primary rounded-full animate-bounce" />
              <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDetail;
