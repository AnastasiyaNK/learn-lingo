import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  teachers: null,
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: INITIAL_STATE,
  reducers: {},

  //   extraReducers: (builder) =>
  //     builder
  //       .addCase(apiCarById.pending, (state, action) => {
  //         state.isLoading = true;
  //         state.error = null;
  //       })
  //       .addCase(apiCarById.fulfilled, (state, action) => {
  //         state.carDetails = action.payload;
  //         state.isLoading = false;
  //       })
  //       .addCase(apiCarById.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       }),
});

// export const { openModal, closeModal } = modalSlice.actions;
export const teachersReducer = teachersSlice.reducer;
