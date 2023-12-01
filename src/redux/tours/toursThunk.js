import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAll = createAsyncThunk(
    "tours/getAll",
    async (page, { rejectWithValue }) => {
        try {
            const res = await axios.get('/tours', {
                params: {
                    page,
                    limit: 12
                }
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const getById = createAsyncThunk(
    "tours/getById",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/tours/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);


