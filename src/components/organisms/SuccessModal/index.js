import React from 'react';
import { Title, SuccessImage } from '~/components/atoms';
import { Modal } from '~/components/molecules';
import { ContainerBackground } from './styles';
import background from '~/assets/img/auth_background.png';

export const SuccessModal = ({ visible, onClose, text }) => {
  return (
    <Modal visible={visible} buttonAction={onClose} buttonText="FECHAR">
      <ContainerBackground source={background} resizeMode="cover">
        <SuccessImage />
        <Title w={320} align="center">
          {text}
        </Title>
      </ContainerBackground>
    </Modal>
  );
};
