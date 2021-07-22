import React from 'react';
import { ButtonContainer, TextButton } from './styles';

const kinds = {
  primary: {
    bg: 'primary',
  },
  danger: {
    bg: 'danger',
  },
};

export const Button = ({
  children,
  outline,
  onPress,
  floating,
  kind,
  ...props
}) => {
  return (
    <ButtonContainer
      floating={floating}
      onPress={onPress}
      outline={outline}
      bg={kind ? kinds[kind].bg : kinds.primary.bg}
      {...props}>
      <TextButton outline={outline}>
        {String(children).toUpperCase()}{' '}
      </TextButton>
    </ButtonContainer>
  );
};
