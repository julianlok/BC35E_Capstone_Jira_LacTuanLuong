import userReducer from "../redux/userReducer/userReducer";
import statusReducer from "./statusReducer/statusReducer";
import projectReducer from "./projectReducer/projectReducer";
import priorityReducer from "./priorityReducer/priorityReducer";
import commentReducer from "./commentReducer/commentReducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    userReducer,
    statusReducer,
    projectReducer,
    priorityReducer,
    commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispathType = typeof store.dispatch;
