import React, { useState } from "react";
import { Form, Formik } from "formik";

import Textarea from "../../components/Input/Textarea";
import ModalBase from "../../components/Modal/ModalBase";
import Dropdow from "../../components/Dropdown/Dropdow";
import Select from "../../components/Dropdown/Select";
import List from "../../components/Dropdown/List";
import Option from "../../components/Dropdown/Option";
import useClickOutside from "../../hooks/useClickOutside";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import Label from "../../components/Label/Label";
import SelectTag from "../../components/Dropdown/SelectTag";
import ListTag from "../../components/Dropdown/ListTag";
import OptionTag from "../../components/Dropdown/OptionTag";
import Input from "../../components/Input/Input";
import Slider from "../../components/Slider/Slider";
import FormRow from "../../components/common/FormRow/FormRow";
import TextTiny from "../../components/Input/TextTiny";
import Button from "../../components/Button/Button";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { Avatar, Tooltip } from "antd";
import {
  AddUserType,
  ItemType,
  LstTaskDeTail,
  UserModel,
  userType,
} from "../../types/global";
import { DropResult } from "../../types/global";
import { useToast } from "../Toast";
import { useSelector } from "react-redux";
import { DispathType, RootState } from "../../redux/config";
import { useDispatch } from "react-redux";
import { getUserApi } from "../../redux/userReducer/userReducer";
import { getStoreJson, USER_LOGIN } from "../../util/setting";
import { getPriorityApi } from "../../redux/priorityReducer/priorityReducer";
import {
  getStatusApi,
  updateStatus,
} from "../../redux/statusReducer/statusReducer";
import {
  deleteTask,
  getProjectDetailByIdApi,
  getTaskTypeApi,
  updateTask,
} from "../../redux/projectReducer/projectReducer";
import {
  deleteCommentApi,
  getCommentApi,
  insertCommentApi,
} from "../../redux/commentReducer/commentReducer";
import IconError from "../icons/IconError";

type Props = {
  index: number;

  items: LstTaskDeTail;
  changeStatusName: (
    item: LstTaskDeTail,

    statusId: string,
    taskId: number
  ) => void;
};

interface Values {
  listUserAsign: number[];
  taskId: number;
  taskName: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  projectId: number;
  typeId: number;
  priorityId: number;
  comment?: string;
}

const TaskCard = ({ index, items, changeStatusName }: Props) => {
  const { add } = useToast();
  const {
    taskName,
    priorityTask,
    taskTypeDetail,
    statusId,
    taskId,
    projectId,
    assigness,
    originalEstimate: estimate,
    timeTrackingSpent: spent,
    timeTrackingRemaining,
    description,
    priorityId,
    typeId,
  } = items;
  const taskTypeCurrent =
    taskTypeDetail.taskType === "bug" ? "🐞 BUG" : "✅ NEW TASK";
  const statusCurrent =
    statusId === "1"
      ? "BACKLOG"
      : statusId === "2"
      ? "SELECTED FOR DEVELOPMENT"
      : statusId === "3"
      ? "IN PROGRESS"
      : "DONE";

  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: ItemType.BOX,
      item: {
        ...items,
        index,
      },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          const { statusId, statusName } = dropResult as DropResult;

          if (statusId !== item.statusId) {
            dispatch(updateStatus({ taskId, statusId }));
            changeStatusName(item, statusId, taskId);
            add({
              type: "success",
              message: `Move ${taskName} to ${statusName} successfully `,
              duration: 5000,
              position: "topCenter",
            });
          }
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [add, changeStatusName, items, taskId, taskName]
  );
  let colorPriority: string =
    priorityTask.priority === "High"
      ? "bg-[#e65100]"
      : priorityTask.priority === "Medium"
      ? "bg-[#f9d900]"
      : "bg-[#2ecd6f]";
  let colorTaskType: string =
    taskTypeDetail.taskType === "bug" ? "error" : "secondary";

  // Update Task

  const { comment } = useSelector((state: RootState) => state.commentReducer);

  const { priority: priorityAll } = useSelector(
    (state: RootState) => state.priorityReducer
  );
  const { statuses } = useSelector((state: RootState) => state.statusReducer);
  const { taskType: taskTypeAll } = useSelector(
    (state: RootState) => state.projectReducer
  );
  const dispatch: DispathType = useDispatch();
  // Admin
  const admin: userType = getStoreJson(USER_LOGIN);
  const { userAll } = useSelector((state: RootState) => state.userReducer);
  const [openModalBase, setOpenModalBase] = useState<boolean>(false);
  const [openModalDeleteTask, setpenModalDeleteTask] = useState<boolean>(false);
  const [addUser, setAddUser] = useState<AddUserType[]>([]);
  const [search, setSearch] = useState<string>("");
  const { nodeRef, show: userTag, setShow: setUserTag } = useClickOutside();
  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [openTaskName, setOpenTaskName] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);
  const [isLoadingDel, setIsLoadingDel] = useState<boolean>(false);
  const searchFilter = (data: UserModel[]) => {
    return data?.filter((item) => item?.name.toLowerCase().includes(search));
  };

  const handleOpenModal = async () => {
    setIsLoading(true);
    setOpenDesc(false);
    assigness.map(({ avatar, id, name }) => {
      return setAddUser((prev) => [
        ...prev,
        {
          userId: id,
          name,
          avatar,
        },
      ]);
    });
    await dispatch(getCommentApi(taskId));

    await dispatch(getTaskTypeApi());
    await dispatch(getStatusApi());
    await dispatch(getPriorityApi());
    await dispatch(getUserApi());
    setOpenModalBase(true);
    setIsLoading(false);
  };

  const removeUser = (id: number) => {
    setAddUser(addUser.filter((item) => item.userId !== id));
  };
  const clearListUser = () => {
    setAddUser(addUser.slice(addUser.length, addUser.length));
  };

  const {
    show: taskType,
    setShow: setTaskType,
    nodeRef: taskTypeRef,
  } = useClickOutside();
  const handleToggleTaskType = () => {
    setTaskType(!taskType);
  };

  const {
    show: priority,
    setShow: setPriority,
    nodeRef: priorityRef,
  } = useClickOutside();
  const handleTogglePriority = () => {
    setPriority(!priority);
  };

  const {
    show: status,
    setShow: setStatus,
    nodeRef: statusRef,
  } = useClickOutside();
  const handleToggleStatus = () => {
    setStatus(!status);
  };

  const initialValues: Values = {
    listUserAsign: [],
    taskId: taskId,
    taskName,
    description,
    statusId,
    originalEstimate: estimate,
    timeTrackingSpent: spent,
    timeTrackingRemaining,
    projectId,
    typeId,
    priorityId,
    comment: "",
  };

  return isDragging ? (
    <div
      className={`shadow rounded-md border-2 border-gray-400 border-dashed bg-lite `}
    >
      <li ref={dragPreview} className={`my-2  p-5 cursor-grabbing`}>
        <div className="flex flex-col gap-y-5 opacity-0">
          <div className="flex items-start justify-between">
            <div className="w-[65%]">
              <span>{taskName}</span>
            </div>
            <div>
              <span>{taskTypeDetail.taskType}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>{priorityTask.priority}</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  ) : (
    <>
      {/* Modal delete task */}
      {openModalDeleteTask && (
        <ModalBase
          visible={openModalDeleteTask}
          onClose={() => {
            setpenModalDeleteTask(false);
          }}
        >
          {isLoadingDel ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <>
              <div className="relative bg-white max-w-[500px] w-[400px] max-h-[350px]  overflow-hidden rounded-lg shadow-sdSecondary">
                <div className="flex gap-x-2 p-6">
                  <IconError />
                  <div className="flex-1">
                    <h3 className="text-xl font-mono font-semibold">
                      Delete {taskName}?
                    </h3>
                  </div>
                </div>
                <div className="text-sm text-text2 leading-6 px-6">
                  <p className="mb-3">
                    You're about to permanently delete this task, its comments
                    and attachments, and all of its data.
                  </p>
                  <p>
                    If you're not sure, you can resolve or close this issue
                    instead.
                  </p>
                </div>
                <div className="flex items-start justify-end gap-x-3 px-6 py-5">
                  <Button
                    kind="cancel"
                    type="button"
                    onClick={() => {
                      setpenModalDeleteTask(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    kind="delete"
                    type="button"
                    onClick={async () => {
                      setIsLoadingDel(true);
                      await dispatch(deleteTask(taskId));
                      await dispatch(getProjectDetailByIdApi(projectId));
                      setIsLoadingDel(false);
                      setpenModalDeleteTask(false);
                      setOpenModalBase(false);

                      add({
                        type: "success",
                        message: `Delete ${taskName} successfully`,
                        duration: 3000,
                        position: "topRight",
                      });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalBase>
      )}
      {openModalBase && (
        <ModalBase
          visible={openModalBase}
          onClose={() => {
            setOpenModalBase(false);
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={async (
              {
                description,
                listUserAsign,
                originalEstimate,
                priorityId,
                projectId,
                statusId,
                taskName,
                taskId,
                timeTrackingRemaining,
                timeTrackingSpent,
                typeId,
              },
              { setSubmitting, resetForm }
            ) => {
              listUserAsign = addUser.map((item) => item.userId);
              timeTrackingRemaining = originalEstimate - timeTrackingSpent;
              setSubmitting(true);

              await dispatch(
                updateTask({
                  listUserAsign,
                  taskId,
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
              await resetForm();
            }}
          >
            {({ isSubmitting, setFieldValue, values, resetForm }) => {
              const { priorityId, statusId, typeId, description } = values;
              const placeholderPriority =
                priorityId === 1
                  ? "🟥 High"
                  : priorityId === 2
                  ? "🟨 Medium"
                  : priorityId === 3
                  ? "🟩 Low"
                  : priorityId === 4
                  ? "🟩 Lowest"
                  : priorityTask.priority;
              const placeholderStatus =
                statusId === "1"
                  ? "💙 BACKLOG"
                  : statusId === "2"
                  ? "🧡 SELECTED FOR DEVELOPMENT"
                  : statusId === "3"
                  ? "❤️ IN PROGRESS"
                  : statusId === "4"
                  ? "💚 DONE"
                  : statusCurrent;
              const placeholderType =
                typeId === 1
                  ? "🐞 BUG"
                  : typeId === 2
                  ? "✅ NEW TASK"
                  : taskTypeCurrent;

              return (
                <Form>
                  <div className="relative bg-white min-w-[1280px] rounded-md shadow-lg">
                    {isLoading ? (
                      <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setOpenModalBase(false);
                          }}
                          className="absolute px-3 py-1 rounded-full top-0 right-0 -translate-y-2/4 translate-x-2/4 bg-error bg-opacity-20 hover:bg-opacity-50 transition-all ease-linear cursor-pointer"
                        >
                          <i className="fa-solid fa-xmark text-3xl text-red-600"></i>
                        </button>
                        <div className="px-12 pt-7 pb-4 flex items-center justify-between">
                          <div className="w-2/4 text-text5 text-xl font-semibold ">
                            {taskTypeCurrent} - {taskId}
                          </div>

                          <div className="flex items-center gap-x-8">
                            <button className="flex items-baseline justify-center gap-2 text-[#42526e] bg-[rgba(9,30,66,0.04)] px-3 py-1 hover:bg-gray-200 rounded transition-all ease-linear">
                              <i className="fa-regular fa-paper-plane "></i>
                              <span>Give Feedback</span>
                            </button>
                            <button className="flex items-baseline justify-center gap-2 text-[#42526e] bg-[rgba(9,30,66,0.04)] px-3 py-1 hover:bg-gray-200 rounded transition-all ease-linear">
                              <i className="fa-solid fa-link"></i>
                              <span>Link Issue</span>
                            </button>
                            <button
                              onClick={() => {
                                setpenModalDeleteTask(true);
                              }}
                              className="flex items-center justify-center text-[#42526e] bg-[rgba(9,30,66,0.04)] hover:bg-error hover:bg-opacity-20 hover:text-error transition-all ease-linear w-10 h-10 rounded text-xl"
                            >
                              <i className="fa-regular fa-trash-can"></i>
                            </button>
                          </div>
                        </div>

                        <div className=" flex items-start justify-between gap-x-20 pl-8 pr-5 pb-8">
                          <div className="w-[60%] overflow-x-hidden overflow-y-auto max-h-[500px] scrollbar-none ">
                            {openTaskName ? (
                              <>
                                <Input
                                  className="appearance-none bg-bgInput outline-none border-none"
                                  id="taskName"
                                  name="taskName"
                                  type="text"
                                  placeholder=""
                                ></Input>
                                <div className="flex items-center justify-end gap-x-3 ">
                                  <Button
                                    onClick={() => {
                                      setOpenTaskName(false);
                                    }}
                                    type="button"
                                    kind="cancel"
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <h1
                                onClick={() => {
                                  setOpenTaskName(true);
                                }}
                                className="font-medium text-2xl text-text2 text-center cursor-pointer mb-5"
                              >
                                {values.taskName}
                              </h1>
                            )}
                            <FormGroup>
                              <Label
                                onClick={() => {
                                  setOpenDesc(true);
                                }}
                              >
                                Description *
                              </Label>
                              {openDesc ? (
                                <>
                                  <TextTiny
                                    control="tiny-mce"
                                    name="description"
                                    value={values.description ?? description}
                                  />
                                  <div className="flex items-center justify-end gap-x-3">
                                    <Button
                                      kind="cancel"
                                      onClick={() => {
                                        setOpenDesc(false);
                                      }}
                                      type="button"
                                    >
                                      Cancel
                                    </Button>
                                  </div>
                                </>
                              ) : (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: description,
                                  }}
                                  className="cursor-pointer text-sm text-text4"
                                  onClick={() => {
                                    setOpenDesc(true);
                                  }}
                                ></div>
                              )}
                            </FormGroup>
                            <div className=" flex items-center gap-x-3 mb-5">
                              <span className="w-11 h-11 rounded-full overflow-hidden">
                                <img
                                  className="w-full h-full object-cover"
                                  src={admin.avatar}
                                  alt="avatar"
                                />
                              </span>

                              <div className="flex-1 flex items-center gap-x-3">
                                <Textarea
                                  className="pt-2 h-10"
                                  name="comment"
                                  placeholder="Add a comment ..."
                                ></Textarea>
                                <Button
                                  isLoading={isLoadingBtn}
                                  onClick={async () => {
                                    if (values.comment) {
                                      setIsLoadingBtn(true);
                                      await dispatch(
                                        insertCommentApi({
                                          taskId,
                                          contentComment: values.comment,
                                        })
                                      );
                                      await dispatch(getCommentApi(taskId));

                                      setIsLoadingBtn(false);
                                    }
                                  }}
                                  type="button"
                                  kind="success"
                                >
                                  Send
                                </Button>
                              </div>
                            </div>
                            {comment.map(({ user, contentComment, id }) => {
                              const isActiveDelete =
                                parseInt(admin.id || "0") === user.userId;
                              return (
                                <div
                                  key={id}
                                  className=" flex items-start gap-x-3 mb-5"
                                >
                                  <span className="w-9 h-9 rounded-full overflow-hidden">
                                    <img
                                      className="w-full h-full object-cover"
                                      src={user.avatar}
                                      alt="avatar"
                                    />
                                  </span>
                                  <div className="flex flex-col">
                                    <h4 className="text-text5 font-semibold">
                                      {user.name}
                                    </h4>
                                    <div className="flex flex-col gap-y-0">
                                      <div className="text-text3 ">
                                        <span>{contentComment}</span>
                                      </div>
                                      {isActiveDelete && (
                                        <div className="flex gap-x-2">
                                          <span className="text-xs text-blue-500 cursor-pointer">
                                            Edit
                                          </span>
                                          <span
                                            onClick={async () => {
                                              await dispatch(
                                                deleteCommentApi(id)
                                              );
                                              await dispatch(
                                                getCommentApi(taskId)
                                              );
                                            }}
                                            className="text-xs text-error cursor-pointer"
                                          >
                                            Delete
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="w-[40%] pr-5 overflow-x-hidden overflow-y-auto h-[500px] max-h-[500px] scrollbar-thumb-stone-300 scrollbar-track-slate-100 scrollbar-thin ">
                            <FormRow>
                              <FormGroup>
                                <Label>Priority</Label>
                                <Dropdow>
                                  <Select
                                    className="text-text2 bg-bgInput"
                                    nodeRef={priorityRef}
                                    placeholder={placeholderPriority}
                                    onClick={handleTogglePriority}
                                    show={priority}
                                  ></Select>
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
                                </Dropdow>
                              </FormGroup>
                              <FormGroup>
                                <Label>Task Type</Label>
                                <Dropdow>
                                  <Select
                                    className=" text-text2 bg-bgInput"
                                    nodeRef={taskTypeRef}
                                    placeholder={placeholderType}
                                    onClick={handleToggleTaskType}
                                    show={taskType}
                                  ></Select>
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
                                </Dropdow>
                              </FormGroup>
                            </FormRow>
                            <FormGroup>
                              <Label>Status</Label>
                              <Dropdow>
                                <Select
                                  nodeRef={statusRef}
                                  placeholder={placeholderStatus}
                                  onClick={handleToggleStatus}
                                  show={status}
                                ></Select>
                                <List show={status}>
                                  {statuses.map(({ statusId, statusName }) => {
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
                                          setFieldValue("statusId", statusId);
                                        }}
                                      >
                                        {statusName}
                                      </Option>
                                    );
                                  })}
                                </List>
                              </Dropdow>
                            </FormGroup>
                            <FormGroup>
                              <Label>Assigness</Label>
                              <Dropdow>
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
                              </Dropdow>
                            </FormGroup>

                            <FormGroup>
                              <Label>Time Tracking</Label>
                              <Slider
                                name="Tracking"
                                min={spent}
                                max={estimate - spent}
                                defaultValue={spent}
                              ></Slider>
                            </FormGroup>
                            <FormRow>
                              <FormGroup>
                                <Label htmlFor="originalEstimate">
                                  Original Estimate (hours)
                                </Label>
                                <Input
                                  className="appearance-none bg-bgInput"
                                  id="originalEstimate"
                                  name="originalEstimate"
                                  type="number"
                                  placeholder="Original Estimate..."
                                ></Input>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="timeTrackingSpent">
                                  Time Spent (hours)
                                </Label>
                                <Input
                                  className="appearance-none bg-bgInput"
                                  id="timeTrackingSpent"
                                  name="timeTrackingSpent"
                                  type="number"
                                  placeholder="Time Spent..."
                                ></Input>
                              </FormGroup>
                            </FormRow>
                            <div className="flex items-center justify-end gap-x-3 ">
                              <Button
                                onClick={() => {
                                  resetForm();
                                }}
                                type="button"
                                kind="cancel"
                              >
                                Cancel
                              </Button>
                              <Button type="submit" kind="success">
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </ModalBase>
      )}
      <Link
        onClick={() => {
          handleOpenModal();
        }}
        to={`/project-detail/${projectId}/${taskId}`}
      >
        <li
          ref={drag}
          className="my-2 bg-white border-2 border-dashed border-transparent p-5 shadow rounded-md cursor-grab "
        >
          <div className="flex flex-col gap-y-5 ">
            <div className="flex items-start justify-between">
              <div className="w-[65%]">
                <span className="text-base font-medium text-text5">
                  {taskName}
                </span>
              </div>
              <div>
                <span
                  className={`px-2 py-1 text-xs text-${colorTaskType} bg-${colorTaskType} bg-opacity-20 font-medium rounded-lg`}
                >
                  {taskTypeDetail.taskType}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`${colorPriority} w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1`}
                >
                  {priorityTask.priority}
                </span>
              </div>
              <Avatar.Group
                maxCount={2}
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                }}
              >
                {assigness.map(({ avatar, id, name }) => (
                  <Tooltip key={id} title={name} placement="top">
                    <Avatar src={<img src={avatar} alt={`${name} avatar`} />} />
                  </Tooltip>
                ))}
              </Avatar.Group>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};

export default TaskCard;
