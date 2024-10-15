import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import index from "../reducers/index";
import { persistReducer, persistStore } from "redux-persist";
// localStorage.setItem("token", "fdhrtjytkutku6");
// const token = localStorage.getItem("token");

const rootReducer = combineReducers({
  index: index,
});
const persistConfig = {
  key: "root",
  storage,

};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddLeware) =>
    getDefaultMiddLeware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
