import { Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/common";

export const FormSubmitButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={commonStyles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={commonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
