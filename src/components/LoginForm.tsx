import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import {globalStyle} from '../css/globalStyle';
import auth from '@react-native-firebase/auth';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {signIn} from '../utils/userUtil';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEB_CLIENT_ID} from '@env';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    // Handle login logic
    try {
      const result = await signIn(email, password);
      Alert.alert('로그인 되었습니다!');
      console.log(result.user.email);
    } catch (e) {
      console.log(e);
    }

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
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        로그인
      </Button>
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

export default LoginForm;
