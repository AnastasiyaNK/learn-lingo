import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  teachers: null,
  isLoading: false,
  error: null,
  selectedTeacherId: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedTeacherId: (state, action) => {
      state.selectedTeacherId = action.payload;
    },
  },

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

export const {setSelectedTeacherId} = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
