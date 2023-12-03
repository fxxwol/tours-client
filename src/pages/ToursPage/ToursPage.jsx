import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import AddTourModal from 'components/Modals/AddTourModal/AddTourModal';
import NoTours from 'components/NoTours/NoTours';
import ToursList from 'components/ToursList/ToursList';
import { PrimaryButton } from 'global/Button.styled';
import { useAuth } from 'hooks/useAuth';
import { ToursSection } from 'pages/ToursPage/ToursPage.styled';
import { useEffect, useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const allTours = useSelector(selectTours);
  const filteredTours = useSelector(selectFilteredTours);
  const filterLoading = useSelector(selectFilterLoading);
  const isFiltered = useSelector(selectisFiltered);
  const isLoading = useSelector(selectLoading);
  const countryLoading = useSelector(selectCountryLoading);
  const {
    user: { role },
  } = useAuth();
  const isAdmin = role === 'admin';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAll());
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <ToursSection>
      {!countryLoading && <Filter />}
      {isAdmin && (
        <PrimaryButton width={50} height={40} marginb={20} onClick={openModal}>
          Add
        </PrimaryButton>
      )}
      {isModalOpen && <AddTourModal onClose={closeModal} />}
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
