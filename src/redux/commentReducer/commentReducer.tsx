import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CommentModel,
  CommentState,
  InsertCommentType,
} from "../../types/global";
import { http } from "../../util/setting";
import { DispathType } from "../config";

const initialState: CommentState = {
  comment: [],
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    getCommentAction: (
      state: CommentState,
      action: PayloadAction<CommentModel[]>
    ) => {
      state.comment = action.payload.reverse();
    },
  },
});

export const { getCommentAction } = commentReducer.actions;

export default commentReducer.reducer;

/*--------------- action async --------------- */
export const getCommentApi = (id: number) => {
  return async (dispatch: DispathType) => {
    const res = await http.get(`/Comment/getAll?taskId=${id}`);
    // Sau khi call api thành công
    let action: PayloadAction<CommentModel[]> = getCommentAction(
      res.data.content
    );
    dispatch(action);
  };
};
export const insertCommentApi = (data: InsertCommentType) => {
  return async (dispatch: DispathType) => {
    await http.post("/Comment/insertComment", data);
  };
};
export const deleteCommentApi = (id: number) => {
  return async (dispatch: DispathType) => {
    await http.delete(`/Comment/deleteComment?idComment=${id}`);
  };
};
