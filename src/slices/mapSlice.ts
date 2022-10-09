import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import getMap from "../services";

const initialState = {
  data: {}
};

export const fetchMap = createAsyncThunk("map/fetchMap", async () => {
    const {data} = await getMap();
    return data;
});

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMap.fulfilled, (state, action) => {
          state.data = action.payload;
        });
    },
});

export default mapSlice.reducer;
