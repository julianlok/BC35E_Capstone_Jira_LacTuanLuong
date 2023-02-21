import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import { clearStore, getStoreJson, USER_LOGIN } from "../../util/setting";
import { UserLoginType, UserUpdateType } from "../../types/global";
import IconEyeToggle from "../../components/icons/IconEyeToggle";
import useToggle from "../../hooks/useToggle";
import { updateUserApi } from "../../redux/userReducer/userReducer";
import { useDispatch } from "react-redux";
import { DispathType } from "../../redux/config";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/Toast";

type Props = {};

const Profile = (props: Props) => {
  const dispatch: DispathType = useDispatch();
  const { add } = useToast();

  const [update, setUpdate] = useState<boolean>(true);
  const { avatar, email, id, name, phoneNumber }: UserLoginType =
    getStoreJson(USER_LOGIN);
  const initialValues: UserUpdateType = {
    email,
    id,
    name,
    phoneNumber,
    passWord: "",
    confirmPassWord: "",
  };
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();

  const navigate = useNavigate();
  function logOut() {
    clearStore(USER_LOGIN);
    navigate("/login");
    window.location.reload();
  }
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className="bg-lite h-screen">
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
          { email, name, passWord, phoneNumber, id },
          { setSubmitting }
        ) => {
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
          await logOut();
          await add({
            type: "success",
            message: "Logout successful",
            duration: 5000,
            position: "topLeft",
          });
        }}
      >
        {({ isSubmitting, resetForm }) => {
          return (
            <Form>
              <div className="relative h-[150px] bg-gradient-to-r from-[#00a7b4] to-[#a4d96c] rounded-lg ">
                <div className="absolute w-[80%] bottom-0 left-0 translate-y-[70%] translate-x-[20%]">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-5">
                      <div className="w-[150px] h-[150px] select-none cursor-pointer">
                        <img
                          // src="https://api.dicebear.com/5.x/fun-emoji/svg?seed=Ginger"
                          src={avatar}
                          alt="avatar"
                          className="rounded-full object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start mt-5">
                        <span className="font-bold text-text5 text-2xl">
                          {name}
                        </span>
                        <p className="text-text2 font-thin">
                          ID: <span>{id}</span>
                        </p>
                      </div>
                    </div>
                    {update ? (
                      <div className="flex items-center justify-end">
                        <button
                          className="text-lite text-base font-medium font-mono bg-blue-500 px-4 py-2 rounded-lg"
                          type="button"
                          onClick={() => {
                            setUpdate(false);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-x-3 w-2/6 mt-5 ">
                        <button
                          className="bg-stock border border-strock text-text3 text-base font-medium font-mono px-4 py-2  rounded-lg"
                          type="button"
                          onClick={() => {
                            setUpdate(true);
                            resetForm();
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-white text-base font-medium font-mono bg-blue-500 px-4 py-2 rounded-lg"
                        >
                          Update
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-36 flex flex-col items-center justify-center">
                <div className="w-2/5">
                  <FormGroup>
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      disabled={update}
                      placeholder="Please enter your name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      disabled={update}
                      placeholder="Please enter your email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="phoneNumber">Phone number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      disabled={update}
                      placeholder="Please enter your phone number"
                    />
                  </FormGroup>
                  {!update && (
                    <>
                      <FormGroup>
                        <Label htmlFor="passWord">Password</Label>
                        <Input
                          id="passWord"
                          name="passWord"
                          type={showPassword ? "text" : "password"}
                          disabled={update}
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
                          disabled={update}
                          placeholder="Please confirm password ..."
                        />
                      </FormGroup>
                    </>
                  )}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Profile;
