import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser, setUserr} from '../redux/slices/userSlice';
import {User} from '../types/userType';
import {RootState} from '../redux/store';

const HomeScreen = () => {
  const [initializing, setInitializing] = useState(true);

  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();

  function onAuthStateChanged(userr: FirebaseAuthTypes.User | null) {
    console.log(userr?.providerId);
    console.log(userr);
    const newUser = {
      uid: userr?.email,
      email: userr?.email,
      providerId: userr?.providerId,
    } as User;
    dispatch(setUserr(newUser));

    if (!userr) {
      dispatch(clearUser());
    }

    if (initializing && userr !== null) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (initializing) {
  //   return null;
  // }

  if (!user) {
    return (
      <View>
        <Text>로그인 ㄱ</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card>
        <Card.Cover source={require('../assets/images/travel.jpg')} />
        <Card.Content>
          <Text>Welcome {user.email}</Text>
          <Paragraph>This is a simple home screen.</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomeScreen;
