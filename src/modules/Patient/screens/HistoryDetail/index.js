import React from 'react';
import {
  BaseBackground,
  BaseScrollContainer,
  Title,
  GoBackButton,
  DoctorCard,
  CardTitle,
  Input,
  BaseContainer,
  TimeCard,
  ServiceCard,
  BaseText,
  Button,
} from '~/components';
import { ObservationsContainer, DateTimeContainer } from './styles';
import { useHistoryStore } from '~/services/store';

export const HistoryDetail = () => {
  const { appointment } = useHistoryStore();
  return (
    <BaseBackground>
      <BaseScrollContainer>
        <GoBackButton />
        <Title mb={24}>Detalhe da Consulta</Title>
        <CardTitle mb={16}>MÉDICO</CardTitle>
        <DoctorCard doctor={appointment.doctor} />

        <DateTimeContainer>
          <BaseContainer w={240}>
            <CardTitle mb={16}>DATA</CardTitle>
            <Input label="DATA" w={160} value={appointment.date} />
          </BaseContainer>
          <BaseContainer w={160}>
            <CardTitle mb={16}>HORÁRIO</CardTitle>
            <TimeCard time={appointment.time} />
          </BaseContainer>
        </DateTimeContainer>

        <CardTitle mt={24} mb={16}>
          SERVIÇO
        </CardTitle>
        <ServiceCard service={appointment.service} selected />

        <CardTitle mt={24} mb={16}>
          OBSERVAÇÕES MÉDICAS
        </CardTitle>
        <ObservationsContainer>
          <BaseText color="greyDark" size={12}>
            {appointment.observations}
          </BaseText>
        </ObservationsContainer>
      </BaseScrollContainer>
      <Button floating>AVALIAR CONSULTA</Button>
    </BaseBackground>
  );
};
