import { InfoLabel, InfoValue, TourCardContainer, TourDescription, TourInfo, TourTitle, ViewDetailsButton } from "./ToursItem.styled";

function ToursItem({tour}) {
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
      <ViewDetailsButton>View Details</ViewDetailsButton>
    </TourCardContainer>
  );
}
// onClick={() => onViewDetails(tour._id)}
export default ToursItem