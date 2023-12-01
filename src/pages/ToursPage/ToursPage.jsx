import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import NoTours from 'components/NoTours/NoTours';
import ToursList from 'components/ToursList/ToursList';
import { ToursSection } from 'pages/ToursPage/ToursPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from 'redux/filter/filterThunk';
import {
  selectCountryLoading,
  selectFilterLoading,
  selectFilteredTours,
  selectisFiltered,
} from 'redux/filter/selectors';
import { selectLoading, selectTours } from 'redux/tours/selectors';
import { getAll } from 'redux/tours/toursThunk';

function ToursPage() {
  const dispatch = useDispatch();
  const allTours = useSelector(selectTours);
  const filteredTours = useSelector(selectFilteredTours);
  const filterLoading = useSelector(selectFilterLoading);
  const isFiltered = useSelector(selectisFiltered);
  const isLoading = useSelector(selectLoading);
  const countryLoading = useSelector(selectCountryLoading);

  useEffect(() => {
    dispatch(getAll());
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <ToursSection>
      {!countryLoading && <Filter />}
      {isLoading ? (
        <Loader />
      ) : isFiltered ? (
        filterLoading ? (
          <Loader />
        ) : filteredTours.length ? (
          <ToursList tours={filteredTours} />
        ) : (
          <NoTours />
        )
      ) : (
        <ToursList tours={allTours} />
      )}
    </ToursSection>
  );
}

export default ToursPage;
