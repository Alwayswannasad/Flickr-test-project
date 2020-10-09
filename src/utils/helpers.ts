import {Dimensions, PixelRatio, Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const normalize = (size: number) => {
  const {width: SCREEN_WIDTH} = Dimensions.get('window');

  const scale = SCREEN_WIDTH / 320;
  const newSize = size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
