import React from 'react';
import { BaseContainer } from '~/components/atoms';
import { AppointmentCard } from '~/components/molecules';
import { List } from './styles';
import { HISTORIC_MOCK } from './settings';

export const HistoricList = () => (
  <List
    data={HISTORIC_MOCK}
    renderItem={({ item }) => <AppointmentCard appointment={item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <BaseContainer h={16} />}
  />
);
