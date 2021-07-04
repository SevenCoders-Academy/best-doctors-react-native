import styled from 'styled-components/native';

export const CardTouchContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.wp(40)}px;
  height: ${({ theme }) => theme.metrics.px(80)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  overflow: hidden;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
