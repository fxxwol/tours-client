import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { FilterForm, SearchButton } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCountries,
  selectFilters,
  selectisFiltered,
} from 'redux/filter/selectors';
import { setFilters, setIsFiltered } from 'redux/filter/filterSlice';
import { throttle } from 'lodash';
import { search } from 'redux/filter/filterThunk';

function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const isFiltered = useSelector(selectisFiltered);
  const countries = useSelector(selectCountries);

  function handleSelectChange(e) {
    dispatch(
      setFilters({
        country: e.target.value,
      })
    );
  }
  const handleInputChange = throttle(e => {
    dispatch(setFilters({ query: e.target.value }));
  }, 700);

  const handleDateSelect = date => {
    dispatch(
      setFilters({
        date: date.format('YYYY-MM-DD'),
      })
    );
  };

  const handleSubmit = () => {
    dispatch(search(filters));
  };
  const handleReset = () => {
    dispatch(setFilters({ query: '', date: '', country: '' }));
    dispatch(setIsFiltered(false));
  };

  return (
    <FilterForm>
      <FormControl sx={{ minWidth: '150px' }}>
        <TextField
          variant="outlined"
          label="Tour name"
          value={filters.query}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl sx={{ minWidth: '150px' }}>
        <InputLabel id="country-select">Country</InputLabel>
        <Select
          labelId="country-select"
          sx={{ minWidth: '150px' }}
          value={filters.country}
          label="Country"
          onChange={handleSelectChange}
        >
          {countries?.map(country => (
            <MenuItem key={country._id} value={country.country}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={filters.date || null}
          format="DD/MM/YYYY"
          onChange={handleDateSelect}
        />
      </LocalizationProvider>
      <SearchButton onClick={handleSubmit}>Search</SearchButton>
      {isFiltered && <SearchButton onClick={handleReset}>Reset</SearchButton>}
    </FilterForm>
  );
}

export default Filter;
