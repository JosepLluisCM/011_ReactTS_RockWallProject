import { createSlice, configureStore } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  surname: string;
  email: string;
  birth: Date;
  gender: "Male" | "Female" | "Other" | "Prefer not to say";
  password: string;
  confirmPassword?: string;
}
interface LogInData {
  email: string;
  password: string;
  remember: undefined | "on";
}

const userList: UserData[] = [];

const isLogged: boolean = false;
const failedAttempt: boolean = false;
const alreadyUser: boolean = false;

const loginSlice = createSlice({
  name: "login",
  initialState: { userList, isLogged, failedAttempt, alreadyUser },
  reducers: {
    logIn(state, action) {
      state.failedAttempt = false;
      const userlogIn: LogInData = action.payload;
      /* console.log(userlogIn); */
      const email = state.userList.find(
        (user) => user.email === userlogIn.email
      );
      console.log(email);
      if (email) {
        if (email.password === userlogIn.password) {
          state.isLogged = true;
          return;
        } else {
          state.failedAttempt = true;
        }
      } else {
        state.failedAttempt = true;
      }
    },
    logOut(state) {
      state.isLogged = false;
    },
    addUser(state, action) {
      state.alreadyUser = false;
      const addUser: UserData = action.payload;
      delete addUser.confirmPassword;
      const email = state.userList.find((user) => user.email === addUser.email);
      if (!email) {
        state.userList.push(addUser);
      } else {
        state.alreadyUser = true;
      }
    },
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
