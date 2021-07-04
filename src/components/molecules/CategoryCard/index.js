import React from 'react';
import { BaseContainer, BaseText } from '~/components/atoms';
import { ImageBackground, CardTouchContainer } from './styles';

export const CategoryCard = ({ title, image, onPress }) => {
  return (
    <CardTouchContainer w={156} h={80} br={8} onPress={onPress}>
      <ImageBackground source={{ uri: image }}>
        <BaseContainer
          align="center"
          justify="center"
          bg="darkTransparentLight">
          <BaseText fontSize={16} color="white" fontFamily="bold">
            {title}
          </BaseText>
        </BaseContainer>
      </ImageBackground>
    </CardTouchContainer>
  );
};
