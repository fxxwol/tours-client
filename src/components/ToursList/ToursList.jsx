import ToursItem from './ToursItem/ToursItem';
import { List } from './ToursList.styled';

function ToursList({ tours }) {
  return (
    <List>
      {tours.map(tour => {
        return <ToursItem key={tour._id} tour={tour} />;
      })}
    </List>
  );
}

export default ToursList;
