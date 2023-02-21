import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PriorityState, PriorityType } from "../../types/global";
import { http } from "../../util/setting";
import { DispathType } from "../config";

const initialState: PriorityState = {
  priority: [],
};

const priorityReducer = createSlice({
  name: "priorityReducer",
  initialState,
  reducers: {
    getPriorityAction: (
      state: PriorityState,
      action: PayloadAction<PriorityType[]>
    ) => {
      state.priority = action.payload;
    },
  },
});

export const { getPriorityAction } = priorityReducer.actions;

export default priorityReducer.reducer;

/*--------------- action async --------------- */

export const getPriorityApi = () => {
  return async (dispatch: DispathType) => {
    const res = await http.get("/Priority/getAll?id=0");
    // Sau khi call api thành công
    let action: PayloadAction<PriorityType[]> = getPriorityAction(
      res.data.content
    );
    dispatch(action);
  };
};
