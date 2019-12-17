import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default StyleSheet.create({
    wrapper: {
       flexDirection: "row",
       alignItems: "center",
       paddingTop: 20,
       paddingBottom: 20,
    },
    text: {
        paddingLeft: 10,
    },
    textBlack: {
        paddingLeft: 10,
        color: colors.white,
    },
});
