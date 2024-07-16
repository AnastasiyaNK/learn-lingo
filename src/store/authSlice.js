import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userData: null,
  isSignedIn: false,

  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
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
export const authReducer = authSlice.reducer;
