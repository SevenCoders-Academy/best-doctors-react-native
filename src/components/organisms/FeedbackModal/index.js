import React from 'react';
import { Title, SuccessImage, ErrorImage } from '~/components/atoms';
import { Modal } from '~/components/molecules';
import { ContainerBackground } from './styles';
import successBackground from '~/assets/img/auth_background.png';
import errorBackground from '~/assets/img/error_modal_background.png';

export const FeedbackModal = ({
  type,
  visible,
  onClose,
  text,
  primaryButtonAction,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonAction,
}) => {
  return (
    <Modal
      visible={visible}
      buttonAction={primaryButtonAction || onClose}
      buttonText={primaryButtonText || 'FECHAR'}>
      <ContainerBackground
        source={type === 'error' ? errorBackground : successBackground}
        resizeMode="cover">
        {type === 'error' ? <ErrorImage /> : <SuccessImage />}
        <Title w={320} align="center">
          {text}
        </Title>
      </ContainerBackground>
    </Modal>
  );
};
