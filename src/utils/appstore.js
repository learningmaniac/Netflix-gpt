import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice.js";
import moviesReducer from "./movieSlice.js";
import gptReducer from "./gptSlice.js";
import configReducer from "./configSlice";

const appstore = configureStore({
      reducer:{
          user:userReducer,
          movies:moviesReducer,
          gpt:gptReducer,
          config:configReducer
      }
});

export default appstore;