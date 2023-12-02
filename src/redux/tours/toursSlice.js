import { createSlice } from "@reduxjs/toolkit";
import { addTour, deleteTour, getAll, getById, updateTour } from "./toursThunk";

export const toursSlice = createSlice({
    name: 'tours',
    initialState: {
        tours: [],
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
            .addCase(getById.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                }
            })
            .addCase(getById.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
            .addCase(addTour.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
            .addCase(updateTour.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
            .addCase(deleteTour.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
    }
});

export const addTourAndRefresh = (newTour) => async (dispatch) => {
    await dispatch(addTour(newTour));
    dispatch(getAll());
};

export const updateTourAndRefresh = (updatedTour) => async (dispatch) => {
    await dispatch(updateTour(updatedTour));
    dispatch(getAll());
};

export const deleteTourAndRefresh = (tourId) => async (dispatch) => {
    await dispatch(deleteTour(tourId));
    dispatch(getAll());
};