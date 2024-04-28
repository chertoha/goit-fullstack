import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 212,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    // backgroundColor: "grey",
  },

  formWrapper: {
    flex: 1,
    marginHorizontal: 16,
  },

  title: {
    fontFamily: "Roboto-Medium",
    marginTop: 92,
    textAlign: "center",
    color: "#212121",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 1,
  },

  fieldsWrapper: {
    marginTop: 32,
    rowGap: 16,
  },

  field: {
    fontFamily: "Roboto-Regular",
    height: 50,
    paddingHorizontal: 16,
    color: "#BDBDBD",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },

  logRegLink: {
    height: 50,
    marginBottom: 55,
    alignItems: "center",
    justifyContent: "center",
  },

  logRegLinkText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
});
