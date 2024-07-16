import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { teachersReducer } from "./teachersSlice";

export const store = configureStore({
  reducer: { auth: authReducer, teachers: teachersReducer },
});
