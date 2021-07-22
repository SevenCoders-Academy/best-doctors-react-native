import React from 'react';
import { Title, SuccessImage, ErrorImage, Button } from '~/components/atoms';
import { Modal } from '~/components/molecules';
import { ContainerBackground } from './styles';
import successBackground from '~/assets/img/success_modal_background.png';
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
      type={type || 'success'}
      visible={visible}
      h={528}
      buttonAction={primaryButtonAction || onClose}
      buttonText={primaryButtonText || 'FECHAR'}>
      <ContainerBackground
        source={type === 'error' ? errorBackground : successBackground}
        resizeMode="cover">
        {type === 'error' ? <ErrorImage /> : <SuccessImage size="small" />}
        <Title
          w={320}
          mb={36}
          color={type === 'error' ? 'dark' : 'primary'}
          align="center">
          {text}
        </Title>
        {secondaryButtonText && (
          <Button kind="outline-danger">{secondaryButtonText}</Button>
        )}
      </ContainerBackground>
    </Modal>
  );
};
