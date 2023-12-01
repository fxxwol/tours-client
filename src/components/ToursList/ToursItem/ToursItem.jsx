import Modal from 'components/Modal/Modal';
import {
  InfoLabel,
  InfoValue,
  TourCardContainer,
  TourDescription,
  TourInfo,
  TourTitle,
  ViewDetailsButton,
} from './ToursItem.styled';
import { useState } from 'react';

function ToursItem({ tour }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <ViewDetailsButton onClick={openModal}>View Details</ViewDetailsButton>
      {isModalOpen && <Modal onClose={closeModal} tour={tour} />}
    </TourCardContainer>
  );
}

export default ToursItem;
