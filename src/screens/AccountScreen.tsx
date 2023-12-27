import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ToggleButton } from "react-native-paper";

import LoginForm from "../components/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { SharedElementStackParamList, SharedElementTabParamList } from "../types/navigatorType";
import { StackScreenProps } from "@react-navigation/stack";
import PlaceList from "../components/PlaceList";

type Props = {};
type LoginScreenProps = StackScreenProps<SharedElementStackParamList, "Login">;
const AccountScreen = () => {
  const [value, setValue] = React.useState("logout");
  const navigation = useNavigation<LoginScreenProps>();

  return (
    <>
      {
        <View style={{ ...styles.container, flex: 0 }}>
          <ToggleButton.Row
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton icon="alarm-light-off-outline" value="logout" />
            <ToggleButton icon="alarm-light-outline" value="login" />
          </ToggleButton.Row>
        </View>
      }
      {value == "login" ? ( // 로그인 상태
        // TODO: 회원 정보 추적
        <View style={styles.container}>
          <Avatar.Image
            size={160}
            source={require("../assets/images/defaultProfile.png")}
          />
          <PlaceList />
        </View>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
