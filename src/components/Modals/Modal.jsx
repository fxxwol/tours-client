import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../sprite/sprite.svg';
import {
  ModalContainer,
  Backdrop,
  BtnClose,
  CloseIcon,
  InfoWrapper,
  ContentContainer,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const toggleBodyOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const Modal = props => {
  const { onClose } = props;
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
          <InfoWrapper>{props.children}</InfoWrapper>
        </ContentContainer>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
