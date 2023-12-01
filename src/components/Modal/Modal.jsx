import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../sprite/sprite.svg';
import { StyledLink } from 'global/Button.styled';
import {
  ModalContainer,
  Backdrop,
  BtnClose,
  CloseIcon,
  InfoWrapper,
  ContentContainer,
  Descr,
  CardTitle,
  TitleMain,
  RentalBlock,
  RentalTitle,
  RentalInfo,
  RentalItem,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const toggleBodyOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const Modal = ({ onClose, tour }) => {
  let { name, date, description, country, city, price, duration, amount } =
    tour;
  useEffect(() => {
    toggleBodyOverflow(true);
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      toggleBodyOverflow(false);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const onOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onOverlay} className="show">
      <ModalContainer className="show">
        <ContentContainer>
          <BtnClose type="button" aria-label="close button" onClick={onClose}>
            <CloseIcon>
              <use href={`${sprite}#icon-x`} />
            </CloseIcon>
          </BtnClose>
          <InfoWrapper>
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
              href=""
              width={168}
              height={44}
              disabled={!amount && false}
            >
              Add to cart
            </StyledLink>
          </InfoWrapper>
        </ContentContainer>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
