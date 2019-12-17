import React, { useContext } from "react"
import { Text } from "react-native"

import {ThemeContext} from "../../context"
import styles from "./styles"

export default ({ bets }) => {
    const {isThemeBlack} = useContext(ThemeContext)
    return (
        <Text style={
            isThemeBlack
            ? styles.textBlack
            : null
            }>
            Количество ставок { bets.length }
        </Text>
    )
}
