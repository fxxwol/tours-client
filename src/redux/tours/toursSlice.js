import { createSlice } from "@reduxjs/toolkit";
import { getAll, getById } from "./toursThunk";

export const toursSlice = createSlice({
    name: 'tours',
    initialState: {
        tours: [],
        selected: {},
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    tours: [...payload],
                    isLoading: false,
                }
            })
            .addCase(getAll.pending, (state) => {
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            })
            .addCase(getAll.rejected, (state, { payload }) => {
                return {
                    ...state,
                    isLoading: false,
                    error: payload
                }
            })
            .addCase(getById.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    selected: payload
                }
            })
            .addCase(getById.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
    }
});
