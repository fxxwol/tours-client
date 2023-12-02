import { StyledLink } from 'global/Button.styled';
import {
  Descr,
  CardTitle,
  TitleMain,
  RentalBlock,
  RentalTitle,
  RentalInfo,
  RentalItem,
} from './ToursDetailsModal.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cart/cartThunk';
import Modal from '../Modal';

const ToursDetailsModal = ({ onClose, tour }) => {
  let { name, date, description, country, city, price, duration, amount } =
    tour;
  const dispatch = useDispatch();

  return (
    <Modal onClose={onClose}>
      <CardTitle>
        <TitleMain>{name}</TitleMain>
        {price}&#8372;
      </CardTitle>
      <RentalBlock>
        <RentalTitle>Tour Details:</RentalTitle>
        <RentalInfo>
          <RentalItem>
            Country: <span>{country}</span>
          </RentalItem>
          <RentalItem>
            City: <span>{city}</span>
          </RentalItem>
          <RentalItem>
            Duration: <span>{duration}</span>
          </RentalItem>
          <RentalItem>
            Departure date: <span>{date}</span>
          </RentalItem>
        </RentalInfo>
      </RentalBlock>
      <Descr>{description}</Descr>

      <StyledLink
        to={'/cart'}
        width={168}
        height={44}
        disabled={!amount && false}
        onClick={() => dispatch(addToCart(tour._id))}
      >
        Add to cart
      </StyledLink>
    </Modal>
  );
};

export default ToursDetailsModal;
