import { configureStore } from "@reduxjs/toolkit";
import { ecartReducer } from "./ecartSlice";

export default configureStore({
  reducer: {
    ecart: ecartReducer,
  },
});
