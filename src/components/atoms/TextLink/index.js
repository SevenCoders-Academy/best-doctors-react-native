import React from 'react';
import { BaseTouchContainer } from '../Container';
import { CardTitle } from '../Text';

export const TextLink = ({ text, onPress, align, justify, ...props }) => (
  <BaseTouchContainer
    onPress={onPress}
    align={align || 'flex-end'}
    h={24}
    justify={justify || 'flex-end'}
    {...props}>
    <CardTitle>{text}</CardTitle>
  </BaseTouchContainer>
);
