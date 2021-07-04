import styled from 'styled-components/native';

export const ContainerBackground = styled.ImageBackground`
  flex: 1;
  width: ${({ theme }) => theme.metrics.wp(100)}px;
  align-items: center;
  justify-content: center;
`;
