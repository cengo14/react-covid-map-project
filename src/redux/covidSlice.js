import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./actions";

const initialState = {
  loading: true,
  error: null,
  data: null,
};
const covidSlice = createSlice({
  name: "covid",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetails.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.data = payload;
    });
  },
});

export default covidSlice.reducer;
