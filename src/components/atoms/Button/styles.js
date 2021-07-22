import styled from 'styled-components/native';
import { BaseTouchContainer } from '../Container';

export const ButtonContainer = styled(BaseTouchContainer)`
  background-color: ${({ theme, outline, bg }) =>
    outline ? theme.colors.background : theme.colors[bg]};
  height: ${({ theme }) => theme.metrics.px(56)}px;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  border-radius: ${({ theme }) => theme.metrics.px(36)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-color: ${({ theme, bc }) => theme.colors[bc]};

  ${({ floating, theme }) =>
    floating &&
    `
    position: absolute;
    bottom: ${theme.metrics.px(16)}px;
    left: ${theme.metrics.px(23.5)}px;
    right: ${theme.metrics.px(23.5)}px
  `}
`;

export const TextButton = styled.Text`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.background};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
