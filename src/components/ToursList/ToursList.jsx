import { useSelector } from 'react-redux';
import { selectTours } from 'redux/tours/selectors';
import ToursItem from './ToursItem/ToursItem';
import { List } from './ToursList.styled';

function ToursList() {
    const tours = useSelector(selectTours);
  return (
    <List>
      {tours.map(tour => {
        return <ToursItem key={tour._id} tour={tour} />;
      })}
    </List>
  );
}

export default ToursList;
