import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteFromCart, deleteOrder, getAllOrders, getCart, submit, updateStatus } from "./cartThunk";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allOrders: [],
        orderedTours: [],
        totalPrice: 0,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    orderedTours: [...payload.tours],
                    totalPrice: payload.totalPrice,
                    isLoading: false
                }
            })
            .addCase(getCart.pending, (state,) => {
                return {
                    ...state,
                    isLoading: true
                }
            })
            .addCase(getCart.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload,
                    isLoading: false
                }
            })
            .addCase(getAllOrders.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    allOrders: [...payload],
                    isLoading: false
                }
            })
            .addCase(getAllOrders.pending, (state,) => {
                return {
                    ...state,
                    isLoading: true
                }
            })
            .addCase(getAllOrders.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload,
                    isLoading: false
                }
            })
            .addCase(addToCart.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    orderedTours: [...payload.tours],
                    totalPrice: payload.totalPrice,
                }
            })
            .addCase(addToCart.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
            .addCase(submit.fulfilled, (state) => {

                return {
                    ...state,
                    orderedTours: [],
                    totalPrice: 0
                }
            })
            .addCase(submit.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
            .addCase(deleteFromCart.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    orderedTours: [...payload.tours],
                    totalPrice: payload.totalPrice,
                }
            })
            .addCase(deleteFromCart.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
    }
});

export const updateStatusAndRefresh = (updatedOrder) => async (dispatch) => {
    await dispatch(updateStatus(updatedOrder));
    dispatch(getAllOrders());
};

export const deleteOrderAndRefresh = (orderId) => async (dispatch) => {
    await dispatch(deleteOrder(orderId));
    dispatch(getAllOrders());
};