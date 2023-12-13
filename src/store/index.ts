import { createSlice, configureStore } from "@reduxjs/toolkit";

/* Declaration of all the types for the store State */
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

/* We create the Login Slice and all its reducers */
const loginSlice = createSlice({
  name: "login",
  initialState: { userList, isLogged, failedAttempt, alreadyUser },
  reducers: {
    /* LOG IN REDUCER, executed when the login button in the login Form is pressed */
    logIn(state, action) {
      state.failedAttempt = false;
      const userlogIn: LogInData = action.payload;
      /* We check if the userList array contains the entered email, if true, we check the password, if true, login successfully */
      const email = state.userList.find(
        (user) => user.email === userlogIn.email
      );
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
    /* LOG OUT REDUCER, atm only logout check */
    logOut(state) {
      state.isLogged = false;
    },
    /* ADD USER REDUCER, executed when the Register button in the Register Form is pressed */
    addUser(state, action) {
      state.alreadyUser = false;
      const addUser: UserData = action.payload;
      /* We delete the confirmPassword property as we have checked previously to be equal, then we check if there is already an user with that email, and if false, we add user to userList */
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

/* We export the store, atm only login slice, FUTURE IMPLEMENTATIONS OF MORE SLICES WILL CHANGE THIS */
export const store = configureStore({
  reducer: loginSlice.reducer,
});

/* We create the types needed to import later the needed hooks, IN THE HOOKS FOLDER WE DECLARE CUSTOM HOOKS WITH THESE TYPING TO MAKE THIS TYPES DEFAULT USE FOR THE REST OF THE APP */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/* We export the slice ACTIONS separately, and also the type needed later for using this ACTIONS */
export type LoginActions = typeof loginSlice.actions;
export const loginActions = loginSlice.actions;
