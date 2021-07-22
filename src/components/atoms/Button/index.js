import React from 'react';
import { ButtonContainer, TextButton } from './styles';

const kinds = {
  primary: {
    bg: 'primary',
    bc: 'primary',
    tc: 'white',
  },
  danger: {
    bg: 'danger',
    bc: 'danger',
    tc: 'white',
  },
  'outline-danger': {
    bg: 'background',
    bc: 'danger',
    tc: 'danger',
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
      bc={kind ? kinds[kind].bc : kinds.primary.bc}
      {...props}>
      <TextButton
        color={kind ? kinds[kind].tc : kinds.primary.tc}
        outline={outline}>
        {String(children).toUpperCase()}{' '}
      </TextButton>
    </ButtonContainer>
  );
};
