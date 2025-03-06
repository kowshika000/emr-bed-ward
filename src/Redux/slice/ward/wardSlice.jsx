import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const wardOccupancy = createAsyncThunk(
  "ward/wardOccupancy",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.WARD_OCCUPANCY, {
        params: credentials,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const wardOccupancySlice = createSlice({
  name: "wardOccupancy",
  initialState: {
    wardOccupancyData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(wardOccupancy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(wardOccupancy.fulfilled, (state, action) => {
        state.loading = false;
        console.log("ward respose data:", action.payload.data);
        state.wardOccupancyData = action.payload.data;
      })
      .addCase(wardOccupancy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wardOccupancySlice.reducer;
