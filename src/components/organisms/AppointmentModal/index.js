import React, { useState } from 'react';
import { CardTitle } from '~/components/atoms';
import { Input, ServiceCard, TimeCard, Modal } from '~/components/molecules';
import { SuccessModal } from '../SuccessModal';
import { ServicesView, ContentPaddingView, TimesView } from './styles';
import { SERVICES_MOCK, TIME_MOCK } from './settings';

export const AppointmentModal = ({ visible, onClose }) => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  return (
    <Modal
      scroll
      title="Novo Agendamento"
      visible={visible}
      onClose={onClose}
      buttonText="AGENDAR AGORA"
      buttonAction={() => setSuccessModalVisible(true)}>
      <ContentPaddingView>
        <CardTitle mt={24}>DATA</CardTitle>
        <Input mt={12} label="DIA" placeholder="01/07/2021" />
        <CardTitle mt={24} mb={12}>
          SERVIÇO
        </CardTitle>
      </ContentPaddingView>

      <ServicesView horizontal>
        {SERVICES_MOCK.map((item, index) => (
          <ServiceCard key={item.id} service={item} selected={index === 0} />
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

      {successModalVisible && (
        <SuccessModal
          visilble={successModalVisible}
          text="Agendamento realizado com sucesso!"
          onClose={onClose}
        />
      )}
    </Modal>
  );
};
