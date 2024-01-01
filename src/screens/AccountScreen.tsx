import {Alert, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';

import PlaceList from '../components/PlaceList';
import LoginForm from '../components/LoginForm';
import {Button, IconButton, Text} from 'react-native-paper';
import {signOut} from '../utils/userUtil';
import {globalStyle} from '../css/globalStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useNavigation} from '@react-navigation/native';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {RootStackParamList} from '../types/navigatorType';
import ResetPassModal from '../components/ResetPassModal';
import SocialLoginBox from '../components/SocialLoginBox';

const AccountScreen = () => {
  const navigation =
    useNavigation<MaterialBottomTabNavigationProp<RootStackParamList>>();

  const user = useSelector((state: RootState) => state.user.user);

  const signoutHandler = async () => {
    try {
      const result = await signOut();
      Alert.alert('로그아웃 완료!');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ResetPassModal />
      {user ? (
        <View>
          <View
            style={[
              globalStyle.rowContainer,
              {justifyContent: 'space-between'},
            ]}>
            <Button onPress={signoutHandler}>로그아웃</Button>
            <IconButton
              icon="account-circle"
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
          </View>

          <PlaceList />
        </View>
      ) : (
        <View style={globalStyle.columnContainer}>
          <LoginForm />
          <SocialLoginBox />

          <View style={globalStyle.rowContainer}>
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate('Signup')}>
              회원가입 바로가기
            </Text>
            <Text
              style={[styles.signupText, {marginStart: 10}]}
              onPress={() => navigation.navigate('Signup')}>
              비밀번호 리셋
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
