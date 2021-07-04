import styled from 'styled-components/native';

export const List = styled.FlatList.attrs(({ theme }) => ({
  columnWrapperStyle: {
    width: theme.metrics.wp(87),
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
}))``;
