import { createSlice, configureStore } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  surname: string;
  email: string;
  birth: Date;
  gender: "Male" | "Female" | "Other" | "Prefer not to say";
  password: string;
}

const userList: UserData[] = [];

const isLogged: boolean = false;

const loginSlice = createSlice({
  name: "login",
  initialState: { userList, isLogged },
  reducers: {
    logIn(state) {
      state.isLogged = true;
    },
    logOut(state) {
      state.isLogged = false;
    },
    addUser() {},
  },
});

const store = configureStore({
  reducer: loginSlice.reducer,
});

export const loginActions = loginSlice.actions;
export default store;
