import React from 'react';
import {
  Title,
  BaseTouchContainer,
  CardTitle,
  Button,
} from '~/components/atoms';
import { Input, ServiceCard, TimeCard } from '~/components/molecules';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ModalView,
  ModalContentView,
  DarkTransparentView,
  ServicesView,
  ContentPaddingView,
  TimesView,
} from './styles';
import { theme } from '~/styles/theme';
import { SERVICES_MOCK, TIME_MOCK } from './settings';

export const AppointmentModal = ({ visible, onClose }) => {
  return (
    <ModalView visibile={visible} transparent>
      <DarkTransparentView>
        <ModalContentView>
          <BaseTouchContainer
            mt={24}
            pr={24}
            h={36}
            align="flex-end"
            onPress={onClose}>
            <Icon
              size={theme.metrics.px(32)}
              name="close"
              color={theme.colors.primary}
            />
          </BaseTouchContainer>
          <ContentPaddingView>
            <Title>Novo Agendamento</Title>
            <CardTitle mt={24}>DATA</CardTitle>
            <Input mt={12} label="DIA" placeholder="01/07/2021" />
            <CardTitle mt={24} mb={12}>
              SERVIÇO
            </CardTitle>
          </ContentPaddingView>

          <ServicesView horizontal>
            {SERVICES_MOCK.map((item, index) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                selected={index === 0}
              />
            ))}
          </ServicesView>
          <CardTitle ml={24} mt={24}>
            HORÁRIO
          </CardTitle>
          <TimesView>
            {TIME_MOCK.map((item, index) => (
              <TimeCard key={item.id} time={item.time} selected={index === 0} />
            ))}
          </TimesView>
        </ModalContentView>
        <Button floating>AGENDAR AGORA</Button>
      </DarkTransparentView>
    </ModalView>
  );
};
