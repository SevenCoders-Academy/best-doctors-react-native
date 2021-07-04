import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ModalView = styled.Modal``;

export const DarkTransparentView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`;

export const ModalBackground = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  height: 90%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const ModalScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 48,
  },
})`
  flex: 1;
`;

export const ModalRegularView = styled.View`
  flex: 1;
`;

export const ContentPaddingView = styled.View`
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;
