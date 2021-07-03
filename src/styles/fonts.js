import { Platform } from 'react-native';

export const fonts = {
  bold: Platform.OS === 'ios' ? 'IBM Plex Sans Bold' : 'IBMPlexSans-Bold',
  regular: Platform.OS === 'ios' ? 'IBM Plex Sans' : 'IBMPlexSans-Regular',
  semiBold:
    Platform.OS === 'ios' ? 'IBM Plex Sans SemiBold' : 'IBMPlexSans-SemiBold',
  medium: Platform.OS === 'ios' ? 'IBM Plex Sans Medium' : 'IBMPlexSans-Medium',
};
