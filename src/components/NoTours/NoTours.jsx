import { Message, NoToursFoundContainer } from './NoTours.styled';

const NoTours = ({ message }) => {
  return (
    <NoToursFoundContainer>
      <Message> {message || 'No tours were found :('}</Message>
    </NoToursFoundContainer>
  );
};

export default NoTours;
