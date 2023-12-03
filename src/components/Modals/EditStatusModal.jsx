import { StyledLink } from 'global/Button.styled';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { updateStatusAndRefresh } from 'redux/cart/cartSlice';
import { useState } from 'react';
import Modal from './Modal';
import { Wrapper } from './Modal.styled';

const EditStatusModal = ({ onClose, orderId }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState('');
  const statuses = ['waiting', 'pending', 'doing', 'completed', 'canceled'];
  const handleSelectChange = e => {
    setStatus(e.target.value);
  };
  return (
    <Modal onClose={onClose}>
      <Wrapper>
        <FormControl sx={{ minWidth: '200px', marginBottom: '20px' }}>
          <InputLabel id="status">New Status</InputLabel>
          <Select
            labelId="status"
            sx={{ minWidth: '150px' }}
            value={status}
            label="New Status"
            onChange={handleSelectChange}
          >
            {statuses.map(status => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledLink
          to={'/admin/orders'}
          width={168}
          height={44}
          onClick={() =>
            dispatch(updateStatusAndRefresh({ _id: orderId, status }))
          }
        >
          Save status
        </StyledLink>
      </Wrapper>
    </Modal>
  );
};

export default EditStatusModal;
