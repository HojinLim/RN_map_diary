import {ImageSourcePropType} from 'react-native';
import {Region} from 'react-native-maps';

export type Tag = '전체' | '여행' | '맛집' | '드라이브';
// export type Tag = ['전체', '여행', '맛집', '드라이브'];
export const TagArr = ['전체', '여행', '맛집', '드라이브'];

export type CardType = {
  id: string;
  image: ImageSourcePropType;
  place_name: string;
  title: string;
  contents: string;
  coordinate: Region;
  tag: Tag;
};
