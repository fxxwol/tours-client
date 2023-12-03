import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
    "orders/add",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.post('/orders/', { tourId: id });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const getCart = createAsyncThunk(
    'orders/getCart',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/orders/waiting');
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/orders/');
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const submit = createAsyncThunk(
    "orders/submit",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.post('/orders/submit/');
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
export const updateStatus = createAsyncThunk(
    "orders/updateStatus",
    async ({_id, status}, { rejectWithValue }) => {
        try {
            const res = await axios.patch(`/orders/${_id}/status`, {status});
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const deleteFromCart = createAsyncThunk(
    "orders/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`/orders/tours/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
export const deleteOrder = createAsyncThunk(
    "orders/deleteOrder",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`/orders/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);