import React, { useContext } from 'react'
import { View, Switch, Text } from 'react-native'

import styles from './styles'
import {ThemeContext} from '../../context'

export default () => {
    const { isThemeBlack, setIsThemeBlack } = useContext(ThemeContext)
    
    return (
    <View style={styles.wrapper}>
        <Switch value={isThemeBlack} onValueChange={() => setIsThemeBlack(!isThemeBlack)}/>
        <Text style={
            isThemeBlack ?
            styles.textBlack :
            styles.text
            }>
            {isThemeBlack ? 'Светлая тема' : 'Темная тема' }
        </Text>
    </View>
    )
}