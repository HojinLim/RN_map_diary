import {useWindowDimensions as WindowDimensions} from 'react-native';

/**
 * 세로 높이가 가로보다 높으면 세로(true)화면 아니면 반대
 * @returns boolean
 */
export const isPortraitLandscape = (): boolean => {
  const {width, height} = WindowDimensions();
  return height > width;
};
