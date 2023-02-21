import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserModel,
  userState,
  userType,
  UserUpdateType,
} from "../../types/global";
import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setStoreJson,
  USER_LOGIN,
} from "../../util/setting";
import { DispathType } from "../config";

const initialState: userState = {
  userLogin: getStoreJson(USER_LOGIN) ? getStoreJson(USER_LOGIN) : null,
  userAll: [],
  userByKeyword: [],
  loading: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state: userState, action: PayloadAction<userType>) => {
      state.userLogin = action.payload;
    },

    getUserAction: (state: userState, action: PayloadAction<UserModel[]>) => {
      state.userAll = action.payload;
    },
    getUserByKeywordAction: (
      state: userState,
      action: PayloadAction<UserModel[]>
    ) => {
      state.userAll = action.payload;
    },
    setLoading: (state: userState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  loginAction,
  getUserAction,
  getUserByKeywordAction,
  setLoading,
} = userReducer.actions;

export default userReducer.reducer;

/*--------------- action async --------------- */

export const loginApi = (userLogin: userType) => {
  return async (dispatch: DispathType) => {
    await http
      .post("/Users/signin", userLogin)
      .then((res) => {
        let action: PayloadAction<userType> = loginAction(res.data.content);
        dispatch(action);
        setStoreJson(USER_LOGIN, res.data.content);
        setStoreJson(ACCESS_TOKEN, res.data.content.accessToken);
      })
      .catch((error) => console.log(error));
  };
};

export const getUserApi = () => {
  return async (dispatch: DispathType) => {
    await http
      .get("/Users/getUser")
      .then((res) => {
        // sau khi call api thành công
        let action: PayloadAction<userType[]> = getUserAction(res.data.content);
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

export const registerApi = (userRegister: userType) => {
  return async (dispatch: DispathType) => {
    const res = await http.post("/Users/signup", userRegister);

    console.log("res", res.data.content);
  };
};

export const updateUserApi = (userUpdate: UserUpdateType) => {
  return async (dispatch: DispathType) => {
    await http.put("/Users/editUser", userUpdate);
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: DispathType) => {
    await http.delete(`/Users/deleteUser?id=${id}`);
  };
};
