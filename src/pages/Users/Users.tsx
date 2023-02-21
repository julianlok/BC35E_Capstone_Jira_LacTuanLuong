import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { Link } from "react-router-dom";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import { useToast } from "../../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { DispathType, RootState } from "../../redux/config";
import {
  deleteUser,
  getUserApi,
  updateUserApi,
} from "../../redux/userReducer/userReducer";
import { UserModel, UserUpdateType } from "../../types/global";
import Button from "../../components/Button/Button";
import IconError from "../../components/icons/IconError";
import ModalBase from "../../components/Modal/ModalBase";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import IconEyeToggle from "../../components/icons/IconEyeToggle";
import useToggle from "../../hooks/useToggle";
import { Pagination } from "antd";
type Props = {};

const Users = (props: Props) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();
  const dispatch: DispathType = useDispatch();
  const { add } = useToast();

  const [search, setSearch] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const { userAll, loading } = useSelector(
    (state: RootState) => state.userReducer
  );

  const filteredUsers = userAll.filter((user) => {
    const lowerCaseSearchText = search.toLowerCase();
    return user.name.toLowerCase().includes(lowerCaseSearchText);
  });

  const [openModalDeleteUser, setOpenModalDeleteUser] =
    useState<boolean>(false);

  const [openModalUpdateUser, setOpenModalUpdateUser] =
    useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<UserModel[]>([]);

  const handleDeleteUser = (id: number) => {
    setIsLoading(true);
    setOpenModalDeleteUser(true);
    setUserList(userAll.filter((u) => u.userId === id));
    setIsLoading(false);
  };

  const handleUpdateUser = (id: number) => {
    setIsLoading(true);
    setOpenModalUpdateUser(true);
    setUserList(userAll.filter((u) => u.userId === id));
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch]);

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

  const totalItems = filteredUsers.length;

  const startItemIndex = (currentPage - 1) * pageSize;
  const endItemIndex = startItemIndex + pageSize;
  const pagedUsers = filteredUsers.slice(startItemIndex, endItemIndex);

  return (
    <>
      {/* Modal delete user */}
      {openModalDeleteUser && (
        <ModalBase
          visible={openModalDeleteUser}
          onClose={() => {
            setOpenModalDeleteUser(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <>
              {userList.map(({ name, userId }) => {
                return (
                  <div
                    key={userId}
                    className="relative bg-white max-w-[500px] w-[400px] max-h-[350px]  overflow-hidden rounded-lg shadow-sdSecondary"
                  >
                    <div className="flex gap-x-2 p-6">
                      <IconError />
                      <div className="flex-1">
                        <h3 className="text-xl font-mono font-semibold">
                          Delete {name}?
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-text2 leading-6 px-6">
                      <p className="mb-3">
                        You're about to permanently delete this user, its
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
                          setOpenModalDeleteUser(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        kind="delete"
                        type="button"
                        onClick={async () => {
                          setIsLoading(true);
                          await dispatch(deleteUser(userId));
                          await dispatch(getUserApi());
                          setIsLoading(false);
                          setOpenModalDeleteUser(false);

                          add({
                            type: "success",
                            message: `Delete ${name} successfully`,
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

      {/* Modal update user */}
      {openModalUpdateUser &&
        userList.map(({ avatar, name, userId, email, phoneNumber }) => {
          const initialValues: UserUpdateType = {
            id: userId,
            email,
            name,
            phoneNumber,
            passWord: "",
            confirmPassWord: "",
          };
          return (
            <ModalBase
              key={userId}
              visible={openModalUpdateUser}
              onClose={() => {
                setOpenModalUpdateUser(false);
              }}
            >
              {isLoading ? (
                <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required("name cannot be blank !"),
                    email: Yup.string()
                      .required("email cannot be blank !")
                      .email("email is invalid !"),
                    phoneNumber: Yup.string()
                      .required("phone number cannot be blank !")
                      .matches(phoneRegExp, "Phone number is not valid"),
                    passWord: Yup.string()
                      .required("pasword cannot be blank !")
                      .min(8, "Password must be 8 character "),
                    confirmPassWord: Yup.string()
                      .required("password confirm cannot be blank !")
                      .oneOf(
                        [Yup.ref("passWord"), null],
                        "Both password need to be the same"
                      ),
                  })}
                  onSubmit={async (
                    { id, passWord, email, name, phoneNumber },
                    { setSubmitting }
                  ) => {
                    setTimeout(async () => {
                      setSubmitting(true);
                      await dispatch(
                        updateUserApi({
                          id,
                          passWord,
                          email,
                          name,
                          phoneNumber,
                        })
                      );
                      await dispatch(getUserApi());

                      setOpenModalUpdateUser(false);
                      add({
                        type: "success",
                        message: "Update user successfully",
                        duration: 3000,
                        position: "topCenter",
                      });
                    });
                  }}
                >
                  {({ isSubmitting, errors, setFieldValue }) => {
                    return (
                      <Form>
                        <div className="relative bg-white min-w-[750px] max-h-[650px] overflow-x-hidden overflow-y-auto rounded-lg shadow-sdSecondary scrollbar-none">
                          <div className="flex items-start justify-between mx-5 mt-5">
                            <div className=" flex items-center gap-x-3">
                              <div className="text-text2 font-medium">ID :</div>
                              <span className="flex items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none">
                                {userId}
                              </span>
                            </div>
                            <span
                              className="text-text2 hover:text-error select-none cursor-pointer"
                              onClick={() => {
                                setOpenModalUpdateUser(false);
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
                                Edit User 📝
                              </h1>

                              <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder={name}
                                />
                              </FormGroup>

                              <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="text"
                                  placeholder={email}
                                />
                              </FormGroup>

                              <FormGroup>
                                <Label htmlFor="phoneNumber">
                                  Phone Number
                                </Label>
                                <Input
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  type="text"
                                  placeholder={phoneNumber}
                                />
                              </FormGroup>

                              <FormGroup>
                                <Label htmlFor="passWord">Password</Label>
                                <Input
                                  id="passWord"
                                  name="passWord"
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Please enter your password ..."
                                >
                                  <IconEyeToggle
                                    open={showPassword}
                                    onClick={handleTogglePassword}
                                  />
                                </Input>
                              </FormGroup>

                              <FormGroup>
                                <Label htmlFor="confirmPassWord">
                                  Password confirm
                                </Label>
                                <Input
                                  id="confirmPassWord"
                                  name="confirmPassWord"
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Please confirm password ..."
                                />
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
      <div className="w-full overflow-x-auto">
        <div className="mb-2 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
          <div className="w-2/12 hover:w-2/6 focus-within:w-2/6  transition-all ease-out">
            <HeaderSearch onChange={handleSearch}></HeaderSearch>
          </div>
          <div className="flex items-start gap-x-6">
            <Link
              to="/add-project"
              className="flex items-center justify-center rounded-full w-14 h-14 text-white bg-secondary bg-opacity-60 hover:bg-[#352A65] hover:-translate-y-1 transition-all ease-linear "
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
            </Link>
            <div className="flex-1">
              <h1 className="text-text1 font-semibold text-[22px] mb-2">
                Create Your Project
              </h1>
              <p className="text-text3 text-sm mb-2">
                Jump right into our editor and create your first project!
              </p>
              <Link to="#" className="text-sm text-primary ">
                Need any help? Learn More...
              </Link>
            </div>
          </div>
        </div>
        {loading ? (
          <>
            <table className="table-user">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pagedUsers.map(
                  ({ userId, email, name, phoneNumber }, index) => {
                    return (
                      <tr key={userId}>
                        <td>{index + 1}</td>
                        <td className="truncate">{name}</td>
                        <td>{userId}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                        <td>
                          <div className="flex items-center text-gray-500 gap-x-3">
                            <span
                              onClick={() => {
                                handleUpdateUser(userId);
                              }}
                            >
                              <IconEdit></IconEdit>
                            </span>

                            <span
                              onClick={() => {
                                handleDeleteUser(userId);
                              }}
                            >
                              <IconDelete></IconDelete>
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

export default Users;
