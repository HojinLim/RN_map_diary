import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';

// import {FirebaseError} from 'firebase/app';
import {RootTabParamList} from '../types/navigatorType';

import {useNavigation} from '@react-navigation/native';
// import {errorSignupCheck} from '../utils/userAuthAlertUtil';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {signUp} from '../utils/userUtil';

const SignupScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation =
    useNavigation<MaterialBottomTabNavigationProp<RootTabParamList>>();

  const handleSignUp = async () => {
    // Handle sign-up logic
    console.log('Sign Up:', {email, password});
    try {
      await signUp(email, password);
      navigation.navigate('Account');
      Alert.alert('회원가입 완료!');
    } catch (error) {
      // TODO: 에러 타입
      console.log('에러');
    }

    navigation.navigate('Account');

    initForm();
  };

  const initForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="이메일"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="비밀번호"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        회원가입
      </Button>
      <Text style={styles.backText} onPress={() => navigation.goBack()}>
        뒤로가기
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  backText: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
