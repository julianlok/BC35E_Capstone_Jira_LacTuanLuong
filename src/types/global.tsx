import React from "react";

export type Coords = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type propsInput = {
  disabled?: boolean;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  value?: string;
};

export type portalType = {
  containerClassName?: string;
  bodyClassName?: string;
  containerStyle?: Object;
  bodyStyle?: Object;
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export interface DropResult {
  allowedDropEffect: string;
  dropEffect: string;
  statusName: string;
  statusId: string;
}

export const type = {
  CARD: "card",
};
export const COLUMN_NAMES = {
  BACKLOG: "BACKLOG",
  SELECTED_FOR_DEVELOPMENT: "SELECTED FOR DEVELOPMENT",
  IN_PROGRESS: "IN PROGRESS",
  DONE: "DONE",
};

export const ITEM_TYPE = "ITEM";

export interface ToastProps {
  id: number;
  type?: "success" | "error" | "info" | "warning";
  message?: React.ReactNode;
  duration?: number;
  position?: ToastPositionType;
  icon?: React.ReactNode | boolean;
}

export type ToastPositionType =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

export type RequiredToastProps = Required<ToastProps>;

export type ToastContextType = {
  add: (toast: Omit<ToastProps, "id">) => void;
  remove: (toastId: number, ref: React.RefObject<HTMLDivElement>) => void;
  position: ToastPositionType;
};

/*------------------- Types Reducer -------------------*/

// userReducer

export interface userType {
  email?: string;
  passWord?: string;
  id?: string;
  avatar?: string;
  phoneNumber?: string;
  name?: string;
  accessToken?: string;
  confirmPassWord?: string;
}

export interface UserModel {
  userId: number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string;
}
export interface AddUserType {
  userId: number;
  name: string;
  avatar: string;
}

export interface UserUpdateType {
  id?: number;
  email: string;
  name: string;
  phoneNumber: string;
  passWord: string;
  confirmPassWord?: string;
}
export interface UserProjectType {
  projectId: number;
  userId: number;
}
export interface UserTaskType {
  taskId: number;
  userId: number;
}
export interface userState {
  userLogin: userType;
  userAll: UserModel[];
  userByKeyword: UserModel[];
  loading: boolean;
}

export interface UserLoginType {
  avatar: string;
  email: string;
  id: number;
  name: string;
  phoneNumber: string;
}

export const ItemType = {
  BOX: "Box",
};

// statusReducer

export interface statusState {
  statuses: statusType[];
}
export interface statusType {
  statusId: string;
  statusName: string;
  alias: string;
  deleted: string;
}

export interface UpdateStatusType {
  taskId: number;
  statusId: string;
}

export enum ColumnType {
  BACKLOG,
  DONE,
  SELECTED_FOR_DEVELOPMENT = "SELECTED FOR DEVELOPMENT",
  IN_PROGRESS = "IN PROGRESS",
}

// projectReduccer
export interface ProjectState {
  projectAll: ProjectType[];
  projectDetail: ProjectDetailType;
  projectByKeyword: ProjectType[];
  projectCategory: ProjectCategoryType[];
  taskType: TaskType[];
  lstTask: LstTask[];
  loading: boolean;
}

export interface TaskType {
  id: number;
  taskType: string;
}

export interface UpdateTaskType {
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
}

export interface CreateTaskType {
  listUserAsign: number[];
  taskName: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  projectId: number;
  typeId: number;
  priorityId: number;
}
export interface ProjectType {
  members: Member[];
  creator: Creator;
  id: number;
  projectName: string;
  description: string;
  categoryId: number;
  categoryName: string;
  alias: string;
  deleted: boolean;
}

export interface Welcome {
  id: number;
  taskType: string;
}
export interface ProjectUpdateType {
  projectName: string;
  description: string;
  categoryId: number;
}

export interface Creator {
  id: number;
  name: string;
}

export interface Member {
  userId: number;
  name: string;
  avatar: string;
}

export interface ProjectCategoryType {
  id: number;
  projectCategoryName: string;
}

export interface CreateProjectType {
  projectName: string;
  description: string;
  categoryId: number;
}

export interface ProjectDetailType {
  lstTask: LstTask[];
  members: Member[];
  creator: Creator;
  id: number;
  projectName: string;
  description: string;
  projectCategory: Creator;
  alias: string;
  index?: number;
}

export interface Creator {
  id: number;
  name: string;
}

export interface LstTask {
  lstTaskDeTail: LstTaskDeTail[];
  statusId: string;
  statusName: string;
  alias: string;
}

export interface LstTaskDeTail {
  priorityTask: PriorityTask;
  taskTypeDetail: TaskTypeDetail;
  assigness: Assigness[];
  lstComment: any[];
  taskId: number;
  taskName: string;
  alias: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  typeId: number;
  priorityId: number;
  projectId: number;
}

export interface Assigness {
  id: number;
  avatar: string;
  name: string;
  alias: string;
}

export interface PriorityTask {
  priorityId: number;
  priority: string;
}

export interface TaskTypeDetail {
  id: number;
  taskType: string;
}

export interface Member {
  userId: number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string;
}

// priorityReducer

export interface PriorityState {
  priority: PriorityType[];
}
export interface PriorityType {
  priorityId: number;
  priority: string;
  description: string;
  deleted: boolean;
  alias: string;
}

// commentReducer
export interface InsertCommentType {
  taskId: number;
  contentComment: string;
}

export interface CommentState {
  comment: CommentModel[];
}
export interface CommentModel {
  user: User;
  id: number;
  userId: number;
  taskId: number;
  contentComment: string;
  deleted: boolean;
  alias: string;
}

export interface User {
  userId: number;
  name: string;
  avatar: string;
}
