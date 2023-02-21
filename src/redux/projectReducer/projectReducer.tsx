import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";
import {
  CreateProjectType,
  CreateTaskType,
  LstTask,
  ProjectCategoryType,
  ProjectDetailType,
  ProjectState,
  ProjectType,
  ProjectUpdateType,
  TaskType,
  UpdateTaskType,
  UserProjectType,
  UserTaskType,
} from "../../types/global";
import { http } from "../../util/setting";
import { DispathType } from "../config";

const initialState: ProjectState = {
  projectAll: [],
  projectDetail: {
    lstTask: [],
    members: [],
    creator: {
      id: 0,
      name: "string",
    },
    id: 0,
    projectName: "string",
    description: "",
    projectCategory: {
      id: 0,
      name: "string",
    },
    alias: "",
  },
  projectCategory: [],
  projectByKeyword: [],
  taskType: [],
  lstTask: [],
  loading: false,
};

const projectReducer = createSlice({
  name: "projectReducer",
  initialState,
  reducers: {
    getProjectAction: (
      state: ProjectState,
      action: PayloadAction<ProjectType[]>
    ) => {
      state.projectAll = action.payload;
    },

    getProjectDetailAction: (
      state: ProjectState,
      action: PayloadAction<ProjectDetailType>
    ) => {
      state.projectDetail = action.payload;
    },
    getLstTaskAction: (
      state: ProjectState,
      action: PayloadAction<LstTask[]>
    ) => {
      state.lstTask = action.payload;
    },

    getProjectByKeywordAction: (
      state: ProjectState,
      action: PayloadAction<ProjectType[]>
    ) => {
      state.projectByKeyword = action.payload;
    },

    getProjectCategoryAction: (
      state: ProjectState,
      action: PayloadAction<ProjectCategoryType[]>
    ) => {
      state.projectCategory = action.payload;
    },
    getTaskTypeAction: (
      state: ProjectState,
      action: PayloadAction<TaskType[]>
    ) => {
      state.taskType = action.payload;
    },
    setLoading: (state: ProjectState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  getProjectAction,
  getProjectCategoryAction,
  getProjectByKeywordAction,
  getProjectDetailAction,
  getTaskTypeAction,
  getLstTaskAction,
  setLoading,
} = projectReducer.actions;

export default projectReducer.reducer;

/*--------------- action async --------------- */

export const getProjectApi = () => {
  return async (dispatch: DispathType) => {
    await http
      .get("/Project/getAllProject")
      .then((res) => {
        // Sau khi call api thành công
        let action: PayloadAction<ProjectType[]> = getProjectAction(
          res.data.content
        );
        dispatch(action);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        let action: PayloadAction<boolean> = setLoading(false);
        dispatch(action);
      });
    let action: PayloadAction<boolean> = setLoading(true);
    dispatch(action);
  };
};

export const getProjectDetailApi = (params: Readonly<Params<string>>) => {
  return async (dispatch: DispathType) => {
    const res = await http.get(`/Project/getProjectDetail?id=${params.id}`);
    // Sau khi call api thành công
    let action1: PayloadAction<ProjectDetailType> = getProjectDetailAction(
      res.data.content
    );
    dispatch(action1);
    let action2: PayloadAction<LstTask[]> = getLstTaskAction(
      res.data.content.lstTask
    );
    dispatch(action2);
  };
};
export const getProjectDetailByIdApi = (id: number) => {
  return async (dispatch: DispathType) => {
    const res = await http.get(`/Project/getProjectDetail?id=${id}`);
    // Sau khi call api thành công
    let action1: PayloadAction<ProjectDetailType> = getProjectDetailAction(
      res.data.content
    );
    dispatch(action1);
    let action2: PayloadAction<LstTask[]> = getLstTaskAction(
      res.data.content.lstTask
    );
    dispatch(action2);
  };
};

export const getProjectCategoryApi = () => {
  return async (dispatch: DispathType) => {
    const res = await http.get("/ProjectCategory");
    // Sau khi call api thành công
    let action: PayloadAction<ProjectCategoryType[]> = getProjectCategoryAction(
      res.data.content
    );
    dispatch(action);
  };
};

export const assignUserProject = (data: UserProjectType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Project/assignUserProject", data);
  };
};

export const removeUserFromProject = (data: UserProjectType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Project/removeUserFromProject", data);
  };
};
export const removeUserFromTask = (data: UserTaskType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Project/removeUserFromTask", data);
  };
};

export const deleteProject = (id: number) => {
  return async (dispatch: DispathType) => {
    await http.delete(`/Project/deleteProject?projectId=${id}`);
  };
};
export const updateProject = (id: number, data: ProjectUpdateType) => {
  return async (dispatch: DispathType) => {
    await http.put(`/Project/updateProject?projectId=${id}`, data);
  };
};
export const updateTask = (data: UpdateTaskType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Project/updateTask", data);
  };
};
export const deleteTask = (id: number) => {
  return async (dispatch: DispathType) => {
    await http.delete(`/Project/removeTask?taskId=${id}`);
  };
};
export const createTask = (data: CreateTaskType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Project/createTask", data);
  };
};
export const createProject = (data: CreateProjectType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Project/createProjectAuthorize", data);
  };
};
export const getTaskDetail = (id: number) => {
  return async (dispatch: DispathType) => {
    await http.get(`/Project/getTaskDetail?taskId=${id}`);
  };
};
export const getTaskTypeApi = () => {
  return async (dispatch: DispathType) => {
    const res = await http.get("/TaskType/getAll");
    // Sau khi call api thành công
    let action: PayloadAction<TaskType[]> = getTaskTypeAction(res.data.content);
    dispatch(action);
  };
};
