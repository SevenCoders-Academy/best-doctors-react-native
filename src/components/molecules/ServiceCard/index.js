import React from 'react';
import { BaseText, RegularText } from '~/components/atoms';
import { ServiceCardContainer, TitleContainer } from './styles';

export const ServiceCard = ({ service, selected }) => {
  const { title, price, description } = service;
  return (
    <ServiceCardContainer selected={selected}>
      <TitleContainer>
        <BaseText
          mr={36}
          fontFamily={selected ? 'semiBold' : 'medium'}
          color={selected ? 'primary' : 'greyDark'}>
          {title}
        </BaseText>
        <BaseText
          fontFamily={selected ? 'semiBold' : 'medium'}
          color={selected ? 'primary' : 'greyDark'}>
          {price}
        </BaseText>
      </TitleContainer>
      <RegularText mt={6}>{description}</RegularText>
    </ServiceCardContainer>
  );
};
