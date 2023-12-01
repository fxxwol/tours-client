import { createSlice } from "@reduxjs/toolkit";
import { getCountries, search } from "./filterThunk";
export const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        countries: [],
        filteredTours: [],
        filters: {
            query: "",
            date: "",
            country: "",
        },
        isFiltered: false,
        isLoading: false,
        countryLoading: false,
        error: null,
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setIsFiltered: (state, action) => {
            state.isFiltered = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCountries.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    countries: [...payload],
                    countryLoading: false
                }
            })
            .addCase(getCountries.pending, (state,) => {
                return {
                    ...state,
                    countryLoading: true
                }
            })
            .addCase(getCountries.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload,
                    countryLoading: false
                }
            })
            .addCase(search.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    filteredTours: [...payload],
                    isFiltered: true,
                    isLoading: false,
                }
            })
            .addCase(search.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            })
            .addCase(search.rejected, (state, { payload }) => {
                return {
                    ...state,
                    isLoading: false,
                    error: payload
                }
            })
    }
});

export const { setFilters, setIsFiltered } = filtersSlice.actions;