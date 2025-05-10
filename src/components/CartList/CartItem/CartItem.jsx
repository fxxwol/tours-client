import Modal from 'components/Modals/Modal';
import { PrimaryButton } from 'global/Button.styled';
import { CartTourTitle } from 'pages/CartPage/CartPage.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from 'redux/cart/cartThunk';
import { OrderWrapper, PriceWrap } from './CartItem.styled';

function CartItem({ tour }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <OrderWrapper>
      <CartTourTitle onClick={openModal}>{tour.tour.name}</CartTourTitle>
      <PriceWrap>
        <p>
          {tour.tour.price} x {tour.amount} ₴
        </p>
        <PrimaryButton
          bcg={'#d24444f2'}
          width={90}
          height={30}
          onClick={() => dispatch(deleteFromCart(tour._id))}
        >
          Remove
        </PrimaryButton>
      </PriceWrap>
      {isModalOpen && (
        <Modal onClose={closeModal} tour={tour.tour} hasBtn={false} />
      )}
    </OrderWrapper>
  );
}

export default CartItem;
