import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    start: (state, action) => {
      console.log("START", action.payload);
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    ok: (state, action) => {
      console.log("OK", action.payload);
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    bad: (state, action) => {
      console.log("BAD", action.payload);
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { start, ok, bad } = apiSlice.actions;

export function request({ method, url, options, callback }) {
  return async function (dispatch) {
    try {
      dispatch(start());
      const res = await axios({
        method,
        url,
        ...options,
        data: options.data,
      });
      dispatch(ok(res.data));
      callback(res.data);
    } catch (error) {
      dispatch(bad(error.response.data.message));
    }
  };
}

export default apiSlice.reducer;
