import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { Permission, UserState } from "../../@types";
import { getUserById } from "../../services/User";

const initialState: UserState = {
    isLogged: false,
    accessToken: "",
    permission: Permission.Nothing,
    id: undefined,
    nome: undefined,
    email: undefined,
    nickname: undefined,
};

 
const userReduce = createSlice({
    name: "user",
    initialState,
    reducers: {
      getRequestUser(state) {
        Object.assign(state, {
          token: undefined,
          id: undefined,
          name: undefined,
          email: undefined,
          nickname: undefined,
          isLogged: false,
          isLoading: true,
          isFail: false,
        });
      },
      setUser(state, action) {
        Object.assign(state, {
          token: action.payload.token,
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          nickname: action.payload.nickname,
          isLogged: true,
          isLoading: false,
          isFail: false,
        });
      },
      removeUser(state) {
        Object.assign(state, {
          token: undefined,
          id: undefined,
          name: undefined,
          email: undefined,
          nickname: undefined,
         
          isLogged: false,
          isLoading: false,
          isFail: false,
        });
      },
      failRequestUser(state) {
        Object.assign(state, {
          token: undefined,
          id: undefined,
          name: undefined,
          email: undefined,
          nickname: undefined,
          isLogged: false,
          isLoading: false,
          isFail: true,
        });
      },
    },
  });
  export const { getRequestUser, setUser, removeUser, failRequestUser } =
  userReduce.actions;
export default userReduce.reducer;
  
  export const getUser = () => async (dispatch: Dispatch) => {
    dispatch(getRequestUser());
    const token = window.localStorage.getItem("token");
    const userId = window.localStorage.getItem("_id");
    try {
      const response = await getUserById(userId, token);
      dispatch(
        setUser({
          token,
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
        })
      );
    } catch (error) {
      dispatch(failRequestUser());
    }
  };