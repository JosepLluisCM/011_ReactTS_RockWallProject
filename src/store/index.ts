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

export const store = configureStore({
  reducer: loginSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type LoginActions = typeof loginSlice.actions;
export const loginActions = loginSlice.actions;
