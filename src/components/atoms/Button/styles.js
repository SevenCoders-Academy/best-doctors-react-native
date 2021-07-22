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
  border-color: ${({ theme, bg }) => theme.colors[bg]};
  position: ${({ floating }) => (floating ? 'absolute' : 'unset')};
  bottom: ${({ floating, theme }) =>
    floating ? `${theme.metrics.px(16)}px` : 'unset'};
  left: ${({ floating, theme }) =>
    floating ? `${theme.metrics.px(23.5)}px` : 'unset'};
  right: ${({ floating, theme }) =>
    floating ? `${theme.metrics.px(23.5)}px` : 'unset'};
`;

export const TextButton = styled.Text`
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.background};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
