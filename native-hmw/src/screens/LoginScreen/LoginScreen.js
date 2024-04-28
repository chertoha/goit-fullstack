import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { EmailField } from "../../components/EmailField";
import { FormLogRegLink } from "../../components/FormLogRegLink";
import { FormSubmitButton } from "../../components/FormSubmitButton";
import { PasswordField } from "../../components/PasswordField";
import { commonStyles } from "../../styles/common";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({
  onInputFocus,
  isKeyboardOpen,
  closeKeyboard,
}) => {
  // const [state, setState] = useState(initialState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmitHandler = () => {
    const values = { email, password };
    console.log(values);
    closeKeyboard();
    clearFields();
  };

  return (
    <View
      style={{
        ...commonStyles.container,
        marginTop: isKeyboardOpen ? 100 : 279,
      }}
    >
      <View style={commonStyles.formWrapper}>
        <Text style={title}>Войти</Text>

        <View style={commonStyles.fieldsWrapper}>
          <EmailField
            value={email}
            onChangeText={setEmail}
            onFocus={onInputFocus}
          />

          <PasswordField
            value={password}
            onChangeText={setPassword}
            onFocus={onInputFocus}
          />
        </View>

        <FormSubmitButton title="Войти" onPress={onSubmitHandler} />

        <FormLogRegLink>Нет аккаунта? Зарегистрироваться</FormLogRegLink>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
  },
});

const title = StyleSheet.compose(commonStyles.title, styles.title);
