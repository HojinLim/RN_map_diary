import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../css/globalStyle';
import {IconButton} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEB_CLIENT_ID} from '@env';
import auth from '@react-native-firebase/auth';

type Props = {};

const SocialLoginBox = (props: Props) => {
  const googleLoginHandler = async () => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
    });

    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
  return (
    <View style={{...globalStyle.rowContainer, marginVertical: 10}}>
      {/* 구글 로그인 */}
      <IconButton icon="google" size={20} onPress={googleLoginHandler} />

      {/* 깃허브 로그인 */}
      <IconButton
        icon="github"
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default SocialLoginBox;

const styles = StyleSheet.create({});
