import React from 'react';
import { Title, BaseTouchContainer } from '~/components/atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import { ModalView, ModalContentView, DarkTransparentView } from './styles';
import { theme } from '~/styles/theme';

export const AppointmentModal = ({ visible, onClose }) => {
  return (
    <ModalView visibile={visible} transparent>
      <DarkTransparentView>
        <ModalContentView>
          <BaseTouchContainer h={36} align="flex-end" onPress={onClose}>
            <Icon
              size={theme.metrics.px(32)}
              name="close"
              color={theme.colors.primary}
            />
          </BaseTouchContainer>
          <Title>Novo Agendamento</Title>
        </ModalContentView>
      </DarkTransparentView>
    </ModalView>
  );
};
