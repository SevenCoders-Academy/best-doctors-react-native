import React from 'react';
import { BaseBackground, Title, GoBackButton, DoctorsList } from '~/components';

export const CategoryDetail = ({ route }) => {
  const { title } = route.params;
  return (
    <BaseBackground pr={24} pl={24}>
      <GoBackButton />
      <Title mb={24}>{title}</Title>
      <DoctorsList />
    </BaseBackground>
  );
};
