import styled from 'styled-components/native';

export const ModalView = styled.Modal``;

export const DarkTransparentView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`;

export const ModalContentView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 48,
  },
})`
  position: absolute;
  bottom: 0;
  height: 80%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const ContentPaddingView = styled.View`
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const ServicesView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
  },
})``;

export const TimesView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;
