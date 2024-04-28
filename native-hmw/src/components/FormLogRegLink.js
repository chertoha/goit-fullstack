import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/common";

export const FormLogRegLink = ({ children }) => {
  return (
    <TouchableOpacity style={commonStyles.logRegLink}>
      <Text style={commonStyles.logRegLinkText}>{children}</Text>
    </TouchableOpacity>
  );
};
