import CartItem from "./CartItem/CartItem";
import { OrdersList } from "./CartList.styled";

function CartList({ orderedTours }) {
  return (
    <OrdersList>
      {orderedTours.map(tour => {
        return <CartItem key={tour._id} tour={tour} />;
      })}
    </OrdersList>
  );
}

export default CartList;
