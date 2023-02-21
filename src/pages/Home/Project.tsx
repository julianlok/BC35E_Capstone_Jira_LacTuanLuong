import React, { useEffect, useState, useRef } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { DispathType, RootState } from "../../redux/config";
import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { Avatar, Pagination, Tooltip } from "antd";
import Button from "../../components/Button/Button";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalBase from "../../components/Modal/ModalBase";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import TextTiny from "../../components/Input/TextTiny";
import Option from "../../components/Dropdown/Option";
import List from "../../components/Dropdown/List";
import Dropdown from "../../components/Dropdown/Dropdow";
import Label from "../../components/Label/Label";
import Select from "../../components/Dropdown/Select";
import FormRow from "../../components/common/FormRow/FormRow";
import Input from "../../components/Input/Input";
import useClickOutside from "../../hooks/useClickOutside";
import { useToast } from "../../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import {
  assignUserProject,
  deleteProject,
  getProjectApi,
  getProjectCategoryApi,
  removeUserFromProject,
  updateProject,
} from "../../redux/projectReducer/projectReducer";
import { getUserApi } from "../../redux/userReducer/userReducer";
import { ProjectType, ProjectUpdateType, UserModel } from "../../types/global";
import IconError from "../../components/icons/IconError";
import { getStoreJson, USER_LOGIN } from "../../util/setting";
import { Link } from "react-router-dom";
type Props = {};

const Project = (props: Props) => {
  // lấy data từ redux
  const { projectAll, projectCategory, loading } = useSelector(
    (state: RootState) => state.projectReducer
  );

  const { userAll } = useSelector((state: RootState) => state.userReducer);

  const descRef = useRef<HTMLDivElement>(null);
  const dispatch: DispathType = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { show, setShow, nodeRef } = useClickOutside();
  const handleToggleDropdown = () => {
    setShow(!show);
  };

  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const [search, setSearch] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const [searchUser, setSearchUser] = useState<string>("");

  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [openModalBase, setOpenModalBase] = useState<boolean>(false);
  const [openModalMember, setOpenModalMember] = useState<boolean>(false);
  const [openModalDeleteProject, setOpenModalDeleteProject] =
    useState<boolean>(false);

  const handleToggleModal = async (id: number) => {
    setOpenDesc(false);
    setIsLoading(true);
    setOpenModalBase(true);

    await dispatch(getProjectCategoryApi());
    setProjectList(projectAll.filter((u) => u.id === id));

    setIsLoading(false);
  };

  const handleToggleModalMember = async (id: number) => {
    setIsLoading(true);
    setOpenModalMember(true);
    await dispatch(getUserApi());
    setProjectList(projectAll.filter((u) => u.id === id));
    setIsLoading(false);
  };

  const handleToggleModalDeteleProject = async (id: number) => {
    setIsLoading(true);
    setOpenModalDeleteProject(true);
    setProjectList(projectAll.filter((u) => u.id === id));
    setIsLoading(false);
  };

  const filteredUsers = userAll.filter((user) => {
    const lowerCaseSearchText = searchUser.toLowerCase();
    return user.name.toLowerCase().includes(lowerCaseSearchText);
  });

  const filterProject = projectAll.filter((prod) => {
    const lowerCaseSearchText = search.toLowerCase();
    return prod.projectName.toLowerCase().includes(lowerCaseSearchText);
  });

  // Admin
  const admin = getStoreJson(USER_LOGIN);

  useEffect(() => {
    dispatch(getProjectApi());
  }, []);

  const { add } = useToast();
  // phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (current: number, size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const totalItems = filterProject.length;

  const startItemIndex = (currentPage - 1) * pageSize;
  const endItemIndex = startItemIndex + pageSize;
  const pageProject = filterProject.slice(startItemIndex, endItemIndex);
  return (
    <>
      {/* Modal delete project */}
      {openModalDeleteProject && (
        <ModalBase
          visible={openModalDeleteProject}
          onClose={() => {
            setOpenModalDeleteProject(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <>
              {projectList.map(({ projectName, id }) => {
                return (
                  <div
                    key={id}
                    className="relative bg-white max-w-[500px] w-[400px] max-h-[350px]  overflow-hidden rounded-lg shadow-sdSecondary"
                  >
                    <div className="flex gap-x-2 p-6">
                      <IconError />
                      <div className="flex-1">
                        <h3 className="text-xl font-mono font-semibold">
                          Delete {projectName}?
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-text2 leading-6 px-6">
                      <p className="mb-3">
                        You're about to permanently delete this project, its
                        comments and attachments, and all of its data.
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
                          setOpenModalDeleteProject(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        kind="delete"
                        type="button"
                        onClick={async () => {
                          setIsLoading(true);
                          await dispatch(deleteProject(id));
                          await dispatch(getProjectApi());
                          await setIsLoading(false);
                          await setOpenModalDeleteProject(false);

                          add({
                            type: "success",
                            message: `Delete ${projectName} successfully`,
                            duration: 3000,
                            position: "topRight",
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
            </>
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
              {projectList.map((project) => {
                const { members, projectName, creator } = project;
                const projectId = project?.id;
                return (
                  <div key={projectId}>
                    <div className="flex items-start justify-between mx-5 mt-5">
                      <div className=" flex items-center gap-x-3">
                        <div className="text-text2 font-medium">ID :</div>
                        <span className="flex items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none">
                          {projectId}
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
                            onChange={(
                              e: React.FormEvent<HTMLInputElement>
                            ) => {
                              setSearchUser(e.currentTarget.value);
                            }}
                          />
                        </div>

                        <div className="overflow-x-hidden overflow-y-auto max-h-[400px] mx-w-[600px] scrollbar-none border border-strock mt-3 rounded-lg">
                          {filteredUsers.map(({ avatar, name, userId }) => {
                            return (
                              <div
                                key={userId}
                                className="flex items-center justify-between p-4 border-b border-strock"
                              >
                                <div className="flex items-center gap-x-2">
                                  <Avatar
                                    src={
                                      <img
                                        src={avatar}
                                        alt={`${name} avatar`}
                                      />
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
                                          projectId,
                                          userId,
                                        })
                                      );
                                      await dispatch(getProjectApi());
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
                                      <img
                                        src={avatar}
                                        alt={`${name} avatar`}
                                      />
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
                                          projectId,
                                          userId,
                                        })
                                      );
                                      await dispatch(getProjectApi());
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
              })}
            </div>
          )}
        </ModalBase>
      )}

      {/* Modal update project */}
      {openModalBase &&
        projectList.map(({ id, projectName, categoryName, description }) => {
          if (descRef.current) {
            descRef.current.innerHTML = description;
          }
          const initialValues: ProjectUpdateType = {
            projectName,
            description,
            categoryId: id,
          };
          return (
            <ModalBase
              key={id}
              visible={openModalBase}
              onClose={() => {
                setOpenModalBase(false);
              }}
            >
              {isLoading ? (
                <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={Yup.object().shape({
                    projectName: Yup.string().required(""),
                  })}
                  onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    await dispatch(updateProject(id, values));
                    await dispatch(getProjectApi());
                    setOpenModalBase(false);
                  }}
                >
                  {({ isSubmitting, setFieldValue, values, resetForm }) => {
                    const handleSelectCategory = (id: number) => {
                      setShow(false);
                      setFieldValue("categoryId", id);
                    };

                    return (
                      <Form>
                        <div className="relative bg-white min-w-[750px] max-h-[650px] overflow-x-hidden overflow-y-auto rounded-lg shadow-sdSecondary scrollbar-none">
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
                                setOpenModalBase(false);
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
                          <div className="bg-white rounded-xl py-10 px-[66px]">
                            <div className="text-center">
                              <h1 className="py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
                                Update Project 📝
                              </h1>

                              <FormRow>
                                <FormGroup>
                                  <Label htmlFor="projectName">
                                    Project name
                                  </Label>
                                  <Input
                                    id="projectName"
                                    name="projectName"
                                    type="text"
                                    placeholder={projectName}
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Label>Project category *</Label>
                                  <Dropdown>
                                    <Select
                                      nodeRef={nodeRef}
                                      show={show}
                                      placeholder={categoryName}
                                      onClick={handleToggleDropdown}
                                    />
                                    <List show={show}>
                                      {projectCategory.map(
                                        ({ id, projectCategoryName }) => (
                                          <Option
                                            key={id}
                                            onClick={() =>
                                              handleSelectCategory(id)
                                            }
                                          >
                                            {projectCategoryName}
                                          </Option>
                                        )
                                      )}
                                    </List>
                                  </Dropdown>
                                </FormGroup>
                              </FormRow>
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
                                    />
                                    <div className="flex items-center justify-end gap-x-3">
                                      <Button
                                        kind="cancel"
                                        onClick={() => {
                                          setOpenDesc(false);
                                          resetForm();
                                        }}
                                        type="button"
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        kind="success"
                                        onClick={() => {
                                          setOpenDesc(false);
                                        }}
                                        type="button"
                                      >
                                        Save
                                      </Button>
                                    </div>
                                  </>
                                ) : (
                                  <div
                                    className="cursor-pointer"
                                    dangerouslySetInnerHTML={{
                                      __html: values.description,
                                    }}
                                    onClick={() => {
                                      setOpenDesc(true);
                                    }}
                                  ></div>
                                )}
                              </FormGroup>
                              <div className=" flex items-center justify-center">
                                <Button
                                  isLoading={isSubmitting}
                                  type="submit"
                                  className=" my-3"
                                  kind="success"
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              )}
            </ModalBase>
          );
        })}
      <div className="w-full overflow-x-auto overflow-y-hidden">
        <div className=" bg-white rounded-3xl flex items-center justify-between py-8 px-10">
          <div className="w-2/12 hover:w-2/6 focus-within:w-2/6  transition-all ease-out">
            <HeaderSearch
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setSearch(e.currentTarget.value);
              }}
            ></HeaderSearch>
          </div>
          <Button
            type="button"
            href="/add-project"
            kind="secondary"
            className="bg-secondary bg-opacity-20 text-secondary"
          >
            Create project
          </Button>
        </div>
        {loading ? (
          <>
            <table className="table-project">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Project name</th>
                  <th>Category name</th>
                  <th>Creator</th>
                  <th>Members</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pageProject.map(
                  ({ members, creator, id, projectName, categoryName }) => {
                    const bgColor =
                      categoryName === "Dự án web"
                        ? "bg-green-100"
                        : categoryName === "Dự án phần mềm"
                        ? "bg-blue-100"
                        : "bg-orange-100";
                    const textColor =
                      categoryName === "Dự án web"
                        ? "text-green-500"
                        : categoryName === "Dự án phần mềm"
                        ? "text-blue-500"
                        : "text-orange-500";
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>
                          <Link
                            to={`/project-detail/${id}`}
                            className="truncate text-secondary hover:underline cursor-pointer"
                          >
                            {projectName}
                          </Link>
                        </td>
                        <td>
                          <span
                            className={`w-[100px] text-center rounded-lg px-2 py-1 ${bgColor} ${textColor}`}
                          >
                            {categoryName}
                          </span>
                        </td>
                        <td className="truncate">{creator.name}</td>
                        <td>
                          <div className="flex items-center gap-x-2">
                            <Avatar.Group
                              maxCount={2}
                              maxStyle={{
                                color: "#f56a00",
                                backgroundColor: "#fde3cf",
                              }}
                            >
                              {members.map(({ name, avatar, userId }) => (
                                <Tooltip
                                  key={userId}
                                  title={name}
                                  placement="top"
                                >
                                  <Avatar
                                    src={
                                      <img
                                        src={avatar}
                                        alt={`${name} avatar`}
                                      />
                                    }
                                  />
                                </Tooltip>
                              ))}
                            </Avatar.Group>
                            <span
                              onClick={() => {
                                handleToggleModalMember(id);
                              }}
                              className="w-[32px] h-[32px] cursor-pointer rounded-full border border-dashed flex items-center justify-center text-text3 border-text3 hover:text-text2 hover:border-text2 select-none transition-all"
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
                        </td>
                        <td>
                          <div className="flex items-center text-gray-500 ">
                            <span
                              onClick={() => {
                                handleToggleModal(id);
                              }}
                            >
                              <IconEdit />
                            </span>
                            <span
                              onClick={() => {
                                handleToggleModalDeteleProject(id);
                              }}
                            >
                              <IconDelete />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            <div className="flex items-center justify-end my-5">
              <Pagination
                hideOnSinglePage
                defaultCurrent={currentPage}
                pageSize={pageSize}
                current={currentPage}
                onChange={handlePageChange}
                onShowSizeChange={handlePageSizeChange}
                total={totalItems}
              />
            </div>
          </>
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

export default Project;
