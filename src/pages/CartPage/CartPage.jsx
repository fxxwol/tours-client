import React, { useEffect } from 'react';
import {
  CartContainer,
  CartTtitle,
  SubmitWrap,
  TotalText,
} from './CartPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartLoading,
  selectOrderedTours,
  selectTotalPrice,
} from 'redux/cart/selectors';
import { getCart, submit } from 'redux/cart/cartThunk';
import NoTours from 'components/NoTours/NoTours';
import CartList from 'components/CartList/CartList';
import Loader from 'components/Loader/Loader';
import { StyledLink } from 'global/Button.styled';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectOrderedTours);
  const totalPrice = useSelector(selectTotalPrice);
  const isLoading = useSelector(selectCartLoading);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <CartContainer>
      <CartTtitle>Your Cart</CartTtitle>
      {isLoading ? <Loader /> : <CartList orderedTours={cartItems} />}
      {!isLoading && !cartItems.length && (
        <NoTours message={"You don't have tours in cart yet"} />
      )}
      {cartItems.length > 0 && (
        <SubmitWrap>
          <TotalText>
            <strong> Total price: </strong>
            {totalPrice} ₴
          </TotalText>
          <StyledLink
            to={'/submit'}
            width={200}
            height={40}
            onClick={() => dispatch(submit())}
          >
            Place Order
          </StyledLink>
        </SubmitWrap>
      )}
    </CartContainer>
  );
}

export default CartPage;
