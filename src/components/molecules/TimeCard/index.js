import React from 'react';
import { BaseText } from '~/components/atoms';
import { TimeCardContainer } from './styles';

export const TimeCard = ({ time, selected }) => (
  <TimeCardContainer selected={selected}>
    <BaseText
      size={14}
      fontFamily={selected ? 'bold' : 'medium'}
      color={selected ? 'primary' : 'greyDark'}>
      {time}
    </BaseText>
  </TimeCardContainer>
);
