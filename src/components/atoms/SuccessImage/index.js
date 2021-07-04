import React from 'react';
import styled from 'styled-components/native';
import checkImage from '~/assets/img/testsada.png';

export const Image = styled.Image`
  width: ${({ theme }) => theme.metrics.px(230)}px;
  height: ${({ theme }) => theme.metrics.px(230)}px;
`;

export const SuccessImage = () => <Image source={checkImage} />;
