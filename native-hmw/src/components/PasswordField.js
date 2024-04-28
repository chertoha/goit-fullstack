import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { TextInputField } from "./TextInputField";

export const PasswordField = ({ onFocus, value, onChangeText }) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInputField
        style={{ paddingRight: 103 }}
        placeholder="Пароль"
        secureTextEntry={isSecure}
        onFocus={onFocus}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.btn}
        onPressIn={() => {
          setIsSecure(false);
        }}
        onPressOut={() => {
          setIsSecure(true);
        }}
      >
        <Text style={styles.btnText}>Показать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },

  btn: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 103,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    lineHeight: 19,
    fontWeight: "400",
  },
});
