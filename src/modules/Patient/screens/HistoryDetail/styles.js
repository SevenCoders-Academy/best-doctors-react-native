import styled from 'styled-components/native';

export const ObservationsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  padding: ${({ theme }) => theme.metrics.px(8)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.greyDark};
`;

export const DateTimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  margin-top: ${({ theme }) => theme.metrics.px(24)}px;
`;
