import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { teachersReducer } from "./teachersSlice";

const persistConfig = {
  key: "root",
  whitelist: ["favTeachersIds"],
  storage,
};

const persistedTeacherReducer = persistReducer(persistConfig, teachersReducer);

export const store = configureStore({
  reducer: { auth: authReducer, teachers: persistedTeacherReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
