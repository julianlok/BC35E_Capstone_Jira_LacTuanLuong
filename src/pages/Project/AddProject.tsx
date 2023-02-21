import React, { Fragment, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Dropdown from "../../components/Dropdown/Dropdow";
import Select from "../../components/Dropdown/Select";
import List from "../../components/Dropdown/List";
import useClickOutside from "../../hooks/useClickOutside";
import Option from "../../components/Dropdown/Option";
import FormRow from "../../components/common/FormRow/FormRow";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import TextTiny from "../../components/Input/TextTiny";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { DispathType, RootState } from "../../redux/config";
import {
  createProject,
  getProjectCategoryApi,
} from "../../redux/projectReducer/projectReducer";
import { useToast } from "../../components/Toast";

type Props = {};
interface Values {
  projectName: string;
  description: string;
  categoryId: number;
}
const AddProject = (props: Props) => {
  const dispatch: DispathType = useDispatch();
  const initialValues: Values = {
    projectName: "",
    description: "",
    categoryId: 0,
  };
  const { show, setShow, nodeRef } = useClickOutside();
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  const { projectCategory } = useSelector(
    (state: RootState) => state.projectReducer
  );
  const { add } = useToast();

  useEffect(() => {
    dispatch(getProjectCategoryApi());
  }, []);
  return (
    <Fragment>
      <div className="bg-white rounded-xl py-10 px-[66px]">
        <div className="text-center">
          <h1 className="py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
            Start a Project 🚀
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              projectName: Yup.string().required(
                "This project name already registered"
              ),

              description: Yup.string().required(
                "This description already registered"
              ),
              categoryId: Yup.string().required(
                "This category already registered"
              ),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(async () => {
                setSubmitting(false);
                await dispatch(createProject(values));
                add({
                  type: "success",
                  message: "Create project successfully",
                  duration: 3000,
                  position: "topCenter",
                });
                resetForm();
              });
            }}
          >
            {({ isSubmitting, errors, setFieldValue, values }) => {
              const placeholderCategory =
                values.categoryId === 1
                  ? "Dự án web"
                  : values.categoryId === 2
                  ? "Dự án phần mềm"
                  : values.categoryId === 3
                  ? "Dự án di động"
                  : "Select a project category";
              const handleSelectCategory = (value: number) => {
                setShow(false);
                setFieldValue("categoryId", value);
              };

              return (
                <Form>
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="projectName">Project name *</Label>
                      <Input
                        id="projectName"
                        name="projectName"
                        type="text"
                        placeholder="Please enter project name..."
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Project category *</Label>
                      <Dropdown>
                        <Select
                          nodeRef={nodeRef}
                          show={show}
                          placeholder={placeholderCategory}
                          onClick={handleToggleDropdown}
                        />
                        <List show={show}>
                          {projectCategory.map(
                            ({ id, projectCategoryName }) => {
                              const selected = id === values.categoryId;
                              return (
                                <Option
                                  className={
                                    selected
                                      ? "text-[#42526e] bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary bg-opacity-20"
                                      : ""
                                  }
                                  key={id}
                                  onClick={() => {
                                    console.log(values);

                                    handleSelectCategory(id);
                                  }}
                                >
                                  {projectCategoryName}
                                </Option>
                              );
                            }
                          )}
                        </List>
                      </Dropdown>
                    </FormGroup>
                  </FormRow>
                  <FormGroup>
                    <Label>Description *</Label>
                    <TextTiny control="tiny-mce" name="description" />
                  </FormGroup>
                  <div className=" flex items-center justify-center">
                    <Button
                      isLoading={isSubmitting}
                      type="submit"
                      className=" my-3"
                      kind="primary"
                    >
                      Add new project
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProject;
