import useToggle from "../../hooks/useToggle";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import IconEyeToggle from "../../components/icons/IconEyeToggle";
import FormTemplate from "../../templates/FormTemplate/FormTemplate";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import ButtonGoogle from "../../components/ButtonGoogle/ButtonGoogle";
import { useDispatch } from "react-redux";
import { DispathType } from "../../redux/config";
import { registerApi } from "../../redux/userReducer/userReducer";
import { userType } from "../../types/global";

type Props = {};

const Register = (props: Props) => {
  const dispath: DispathType = useDispatch();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues: userType = {
    email: "",
    passWord: "",
    name: "",
    phoneNumber: "",
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggle();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();

  return (
    <FormTemplate heading="Sing Up">
      <p className="mb-6 font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to={"/login"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google" />
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white dark:border-text3">
        Or sign up with email
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("name cannot be blank !"),
          email: Yup.string()
            .required("email cannot be blank !")
            .email("Invalid email address"),
          phoneNumber: Yup.string()
            .required("phone number cannot be blank !")
            .matches(phoneRegExp, "Phone number is not valid"),

          passWord: Yup.string()
            .required("pasword cannot be blank !")
            .min(8, "Password must be 8 character "),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (acceptTerm) {
            setTimeout(() => {
              setSubmitting(false);
              const actionAsync = registerApi(values);
              dispath(actionAsync);
            }, 300);
          }
        }}
      >
        {({ isSubmitting, errors }) => {
          return (
            <Form>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Please enter your name ..."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Please enter your email ..."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phoneNumber">Phone *</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Please enter your phone ..."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="passWord">Password *</Label>
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

              <CheckBox
                name="term"
                checked={acceptTerm}
                onClick={handleToggleTerm}
              >
                <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
                  I agree to the{" "}
                  <span className="underline text-secondary">Terms of Use</span>{" "}
                  and have read and understand the{" "}
                  <span className="underline text-secondary">
                    Privacy policy
                  </span>
                  .
                </p>
              </CheckBox>

              <Button
                kind="primary"
                type="submit"
                className="w-full text-white bg-primary"
                isLoading={isSubmitting}
              >
                Create my account
              </Button>
            </Form>
          );
        }}
      </Formik>
    </FormTemplate>
  );
};

export default Register;
