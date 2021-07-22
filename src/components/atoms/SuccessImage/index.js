import React from 'react';
import styled from 'styled-components/native';
import checkImage from '~/assets/img/testsada.png';

const sizes = {
  large: 230,
  small: 160,
};

const Image = styled.Image`
  width: ${({ theme, size }) => theme.metrics.px(size)}px;
  height: ${({ theme, size }) => theme.metrics.px(size)}px;
`;

export const SuccessImage = ({ size }) => (
  <Image size={size ? sizes[size] : size.large} source={checkImage} />
);
