import { ImageSourcePropType } from 'react-native'

export type CardType = {
  id: string
  image: ImageSourcePropType
  place_name: string
  title: string
  contents: string
}
