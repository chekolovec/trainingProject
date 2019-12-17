import React, { useContext } from "react";
import { Switch, Text, View } from "react-native";

import {ThemeContext} from "../../context";
import styles from "./styles";

export default () => {
    const { isThemeBlack, setIsThemeBlack } = useContext(ThemeContext);

    return (
    <View style={styles.wrapper}>
        <Switch value={isThemeBlack} onValueChange={() => setIsThemeBlack(!isThemeBlack)}/>
        <Text style={
            isThemeBlack ?
            styles.textBlack :
            styles.text
            }>
            {isThemeBlack ? "Светлая тема" : "Темная тема" }
        </Text>
    </View>
    );
};
