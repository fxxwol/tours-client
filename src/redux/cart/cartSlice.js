import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteFromCart, getCart, submit } from "./cartThunk";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
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
