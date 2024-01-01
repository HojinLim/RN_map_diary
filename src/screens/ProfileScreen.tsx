import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';

import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const deleteUserHandler = async () => {
    try {
      await auth().currentUser?.delete();
      //   navigation.goBack();
      Alert.alert('계정 삭제 완료!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Button onPress={deleteUserHandler}>회원탈퇴</Button>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
