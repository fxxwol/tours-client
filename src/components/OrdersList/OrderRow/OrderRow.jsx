import { ToggleButton } from '@mui/material';
import React, { useState } from 'react';
import { DetailsRow, Td, Th } from '../OrdersList.styled';
import TourRow from '../TourRow';
import EditStatusModal from 'components/Modals/EditStatusModal';
import { PrimaryButton } from 'global/Button.styled';

const OrderRow = ({ order, count }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const { owner, totalPrice, status, tours } = order;
  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <Td>{count}</Td>
        <Td>{owner.name}</Td>
        <Td>{owner.lastName}</Td>
        <Td>{owner.email}</Td>
        <Td>{totalPrice}&#8372;</Td>
        <Td>{status}</Td>
        <Td>
          <ToggleButton value={'details'} onClick={toggleDetails}>
            Click for details
          </ToggleButton>
        </Td>
        <Td>
          <PrimaryButton
            margin={'auto'}
            width={70}
            height={35}
            onClick={openModal}
          >
            Edit
          </PrimaryButton>
        </Td>
      </tr>
      {isModalOpen && (
        <EditStatusModal onClose={closeModal} orderId={order._id} />
      )}
      <DetailsRow className={detailsVisible ? 'details-visible' : ''}>
        <Td colSpan="11">
          <div>
            <table>
              <thead>
                <tr>
                  <Th>Name</Th>
                  <Th>Country</Th>
                  <Th>City</Th>
                  <Th>Amount</Th>
                  <Th>Price</Th>
                </tr>
              </thead>
              <tbody>
                {tours.map(tour => (
                  <TourRow
                    key={tour._id}
                    tour={tour.tour}
                    amount={tour.amount}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </Td>
      </DetailsRow>
    </>
  );
};

export default OrderRow;
