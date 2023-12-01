import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
    "tours/countries",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/tours/countries');
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);


export const search = createAsyncThunk(
    "tours/search",
    async (queryParams, { rejectWithValue }) => {
        try {
            const res = await axios.get('/tours/filter', { params: queryParams });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);