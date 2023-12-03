import {Td } from './OrdersList.styled';

const TourRow = ({ tour, amount }) => {
  const { name, country, city, price } = tour;
  return (
    <>
      <tr>
        <Td>{name}</Td>
        <Td>{country}</Td>
        <Td>{city}</Td>
        <Td>{amount}</Td>
        <Td>{price}</Td>
      </tr>
    </>
  );
};

export default TourRow;
