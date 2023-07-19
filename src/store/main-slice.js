import { createSlice } from "@reduxjs/toolkit";

const mainInitialState = {
  alert: {
    title: "",
    message: "",
    type: "",
    isShown: false,
  },
  isHeaderActive: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState: mainInitialState,
  reducers: {
    alert: (state, action) => {
      const { title, message, type } = action.payload;
      if (!title || !message || !type) {
        console.error("Invalid argument: action.payload");
        return;
      }
      state.alert = { ...action.payload, isShown: true };
    },
    dismissAlert: (state) => {
      state.alert = mainInitialState.alert;
    },
    toggleHeader: (state) => {
      state.isHeaderActive = !state.isHeaderActive;
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
