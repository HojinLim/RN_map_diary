import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigatorType';
import {CardType} from '../types/commonType';
import {IconButton} from 'react-native-paper';
import Animated, {
  FadeInDown,
  FadeOutLeft,
  LinearTransition,
} from 'react-native-reanimated';

type Props = {
  item: CardType;
  index: number;
  onClose: (index: number) => void;
};

const RenderItem = ({item, index, onClose}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View
      layout={LinearTransition.duration(200).delay(200)}
      entering={FadeInDown.delay(200 * index)}
      exiting={FadeOutLeft}>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('Detail', item);
        }}>
        <IconButton
          style={styles.closeButton}
          icon="close-circle-outline"
          size={24}
          onPress={() => onClose(index)}
        />
        <Animated.Image
          source={item.image}
          style={styles.image}
          sharedTransitionTag={item.id}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.title}</Text>
          <Text style={styles.textLocation}>{item.place_name}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    margin: 20,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    top: -10,
    right: 0,
    padding: 4,
  },
});
