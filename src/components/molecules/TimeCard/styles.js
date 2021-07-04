import styled from 'styled-components/native';

export const TimeCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(72)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  border-width: ${({ theme, selected }) =>
    theme.metrics.px(selected ? 2 : 1)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.greyDark};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  margin-right: ${({ theme }) => theme.metrics.px(8)}px;
`;
