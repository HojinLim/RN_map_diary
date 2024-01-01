import {Image, Platform, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigatorType';
import {Icon} from 'react-native-elements';

const Header = () => {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View
      style={[styles.container, {top: Platform.OS === 'ios' ? inset.top : 20}]}
      entering={FadeIn.delay(400)}>
      <Pressable
        style={styles.chevron}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-back" size={25} />
      </Pressable>
      <Pressable
        onPress={() => {
          console.log('LIKE');
        }}>
        <Image
          source={require('../assets/images/travel.jpg')}
          style={styles.chevron}
        />
      </Pressable>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chevron: {
    width: 44,
    height: 44,
    marginTop: 15,
  },
});
