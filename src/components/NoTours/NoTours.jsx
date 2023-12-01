import { Message, NoCarsFoundContainer } from './NoCars.styled';

const NoTours = ({ message }) => {
  return (
    <NoCarsFoundContainer>
      <Message> {message || 'No tours were found :('}</Message>
    </NoCarsFoundContainer>
  );
};

export default NoTours;
