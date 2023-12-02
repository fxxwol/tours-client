import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import {
  AllButtonsWrap,
  ButtonsWrap,
  InfoLabel,
  InfoValue,
  TourCardContainer,
  TourDescription,
  TourInfo,
  TourTitle,
  ViewDetailsButton,
} from './ToursItem.styled';
import ToursDetailsModal from 'components/Modals/TourDetailsModal/TourDetailsModal';
import { PrimaryButton } from 'global/Button.styled';
import TourEditModal from 'components/Modals/TourEditModal/TourEditModal';
import { useDispatch } from 'react-redux';
import { deleteTourAndRefresh } from 'redux/tours/toursSlice';

function ToursItem({ tour }) {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
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
  const openEdit = () => {
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <TourCardContainer>
      <TourTitle>{tour.name}</TourTitle>
      <TourInfo>
        <InfoLabel>City:</InfoLabel>
        <InfoValue>{tour.city}</InfoValue>
      </TourInfo>
      <TourInfo>
        <InfoLabel>Date:</InfoLabel>
        <InfoValue>{tour.date}</InfoValue>
      </TourInfo>
      <TourInfo>
        <InfoLabel>Price:</InfoLabel>
        <InfoValue>&#8372;{tour.price}</InfoValue>
      </TourInfo>
      <TourDescription>{tour.description.substring(0, 150)}...</TourDescription>
      <AllButtonsWrap>
        <ViewDetailsButton onClick={openModal}>View Details</ViewDetailsButton>
        {isAdmin && (
          <ButtonsWrap>
            <PrimaryButton width={50} height={40} onClick={openEdit}>
              Edit
            </PrimaryButton>
            <PrimaryButton width={70} height={40} bcg={'#d24444f2'} onClick={() => dispatch(deleteTourAndRefresh(tour._id))}>
              Remove
            </PrimaryButton>
          </ButtonsWrap>
        )}
      </AllButtonsWrap>
      {isModalOpen && (
        <ToursDetailsModal onClose={closeModal} tour={tour} hasBtn={true} />
      )}
      {isEditOpen && (
        <TourEditModal onClose={closeEdit} tour={tour} />
      )}
    </TourCardContainer>
  );
}

export default ToursItem;
