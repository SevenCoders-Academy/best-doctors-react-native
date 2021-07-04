import React from 'react';
import { Title, BaseTouchContainer, Button } from '~/components/atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ModalView,
  ModalScrollView,
  ModalBackground,
  DarkTransparentView,
  ContentPaddingView,
  ModalRegularView,
} from './styles';
import { theme } from '~/styles/theme';

export const Modal = ({
  visible,
  onClose,
  buttonText,
  buttonAction,
  title,
  children,
  scroll,
}) => {
  return (
    <ModalView visibile={visible} transparent>
      <DarkTransparentView>
        <ModalBackground
          colors={[
            'rgb(248, 243, 245)',
            'rgb(229, 235, 250)',
            'rgb(241, 240, 247)',
          ]}>
          {scroll ? (
            <ModalScrollView>
              {onClose && (
                <BaseTouchContainer
                  mt={24}
                  pr={24}
                  h={36}
                  bg="transparent"
                  align="flex-end"
                  onPress={onClose}>
                  <Icon
                    size={theme.metrics.px(32)}
                    name="close"
                    color={theme.colors.primary}
                  />
                </BaseTouchContainer>
              )}
              {title && (
                <ContentPaddingView>
                  <Title>{title}</Title>
                </ContentPaddingView>
              )}

              {children}
            </ModalScrollView>
          ) : (
            <ModalRegularView>
              {onClose && (
                <BaseTouchContainer
                  mt={24}
                  pr={24}
                  h={36}
                  bg="transparent"
                  align="flex-end"
                  onPress={onClose}>
                  <Icon
                    size={theme.metrics.px(32)}
                    name="close"
                    color={theme.colors.primary}
                  />
                </BaseTouchContainer>
              )}
              {title && (
                <ContentPaddingView>
                  <Title>{title}</Title>
                </ContentPaddingView>
              )}

              {children}
            </ModalRegularView>
          )}
          {buttonText && (
            <Button onPress={buttonAction} floating>
              {buttonText}
            </Button>
          )}
        </ModalBackground>
      </DarkTransparentView>
    </ModalView>
  );
};
