import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ToursList from 'components/ToursList/ToursList';
import { ToursSection } from 'pages/ToursPage/ToursPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from 'redux/filter/filterThunk';
import { selectCountryLoading } from 'redux/filter/selectors';
import { selectLoading } from 'redux/tours/selectors';
import { getAll } from 'redux/tours/toursThunk';

function ToursPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const countryLoading = useSelector(selectCountryLoading);
  useEffect(() => {
    dispatch(getAll());
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      {!countryLoading && (
        <ToursSection>
          <Filter />
          {/* <Filter
          cars={allCars}
          filters={filters}
          onFilter={(val) => dispatch(setFilteredCars(val))}
          isFiltered={isFiltered}
          changeIsFiltered={(val) => dispatch(setIsFiltered(val))}
          changeFilters={(val) => dispatch(setFilters(val))}
        /> */}
          {isLoading ? <Loader /> : <ToursList />}
          {/* {isFiltered && !filteredCars.length && <NoToursFound />} */}
        </ToursSection>
      )}
    </>
  );
}

export default ToursPage;
