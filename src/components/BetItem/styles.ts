import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default StyleSheet.create({
  betItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  title: {
    textAlign: "center",
    paddingBottom: 10,
  },
  deleteButton: {
    width: 100,
    backgroundColor: colors.grey,
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    color: colors.white,
  },
  coefText: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
  },
});
