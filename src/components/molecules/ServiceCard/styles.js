import styled from 'styled-components/native';

export const ServiceCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  padding-horizontal: ${({ theme }) => theme.metrics.px(6)}px;
  padding-vertical: ${({ theme }) => theme.metrics.px(8)}px;
  width: ${({ theme }) => theme.metrics.px(260)}px;
  height: ${({ theme }) => theme.metrics.px(100)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  border-width: ${({ theme, selected }) =>
    theme.metrics.px(selected ? 2 : 1)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.greyDark};
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
