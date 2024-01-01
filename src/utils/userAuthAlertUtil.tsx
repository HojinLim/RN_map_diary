import {Alert} from 'react-native';

export const errorSignupCheck = (errorCode: string) => {
  if (errorCode.includes('already')) {
    Alert.alert('이미 존재하는 계정입니다!');
  } else if (errorCode.includes('invalid-email')) {
    Alert.alert('잘못된 이메일 형식입니다!');
  } else if (errorCode.includes('weak-password')) {
    Alert.alert('비밀번호가 6자리 이상이어야합니다.');
  }
};

export const errorSignInCheck = (errorCode: string) => {
  if (errorCode.includes('invalid-credential')) {
    Alert.alert('이메일과 비밀번호를 다시 확인해주세요!');
  } else if (errorCode.includes('invalid-email')) {
    Alert.alert('잘못된 이메일 형식입니다!');
  } else if (errorCode.includes('weak-password')) {
    Alert.alert('비밀번호가 6자리 이상이어야합니다.');
  }
};
