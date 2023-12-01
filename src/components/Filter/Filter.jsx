import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FilterForm } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCountries } from 'redux/filter/selectors';
import { setFilters } from 'redux/filter/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = useSelector(selectCountries);
  function handleChange(e) {
    setSelectedCountry(e.target.value);
      dispatch(
        setFilters({
          country: e.target.value,
        })
      );
  }
  return (
    <FilterForm>
      <FormControl sx={{ minWidth: '150px' }}>
        <InputLabel id="country-select">Country</InputLabel>
        <Select
          labelId="country-select"
          sx={{ minWidth: '150px' }}
          value={selectedCountry}
          label="Country"
          onChange={handleChange}
        >
          {countries?.map(country => (
            <MenuItem key={country._id} value={country.country}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FilterForm>
  );
}

export default Filter;
