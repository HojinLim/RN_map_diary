import {
  CompositeScreenProps,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Text,
  MaterialBottomTabNavigationProp,
} from "react-native-paper";
import { SharedElementStackParamList, SharedElementTabParamList } from "../types/navigatorType";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation<StackNavigationProp<SharedElementStackParamList>>();

  const handleLogin = () => {
    // Handle login logic
    console.log("Login:", { email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="이메일"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="비밀번호"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        로그인
      </Button>
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate("Signup")}
      >
        회원가입 바로가기
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  signupText: {
    marginTop: 16,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
  backText: {
    marginTop: 16,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginForm;
