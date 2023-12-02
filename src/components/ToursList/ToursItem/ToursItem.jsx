import Modal from 'components/Modals/Modal';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import {
  InfoLabel,
  InfoValue,
  TourCardContainer,
  TourDescription,
  TourInfo,
  TourTitle,
  ViewDetailsButton,
} from './ToursItem.styled';
import ToursDetailsModal from 'components/Modals/TourDetailsModal/TourDetailsModal';

function ToursItem({ tour }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div>
        <ViewDetailsButton onClick={openModal}>View Details</ViewDetailsButton>
        {isAdmin && (
          <>
            <button>Edit</button>
            <button>Remove</button>
          </>
        )}
      </div>
      {isModalOpen && <ToursDetailsModal onClose={closeModal} tour={tour} hasBtn={true} />}
    </TourCardContainer>
  );
}

export default ToursItem;
