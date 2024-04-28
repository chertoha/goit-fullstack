import { TextInput } from "react-native";
import { commonStyles } from "../styles/common";
import { TextInputField } from "./TextInputField";

export const EmailField = ({ onFocus, value, onChangeText }) => {
  return (
    <TextInputField
      inputMode="email"
      placeholder="Адрес электронной почты"
      onFocus={onFocus}
      value={value}
      onChangeText={onChangeText}
    />
  );
};
