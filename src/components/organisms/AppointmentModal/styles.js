import styled from 'styled-components/native';

export const ModalView = styled.Modal``;

export const DarkTransparentView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`;

export const ModalContentView = styled.View`
  position: absolute;
  bottom: 0;
  height: 80%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;
