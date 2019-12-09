import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import BetItem from './BetItem'

export default props => {
    return (
        <View style={styles.betsContainer}>
            <TouchableOpacity 
                style={styles.crossWrapper}
                onPress={() => props.navigation.closeDrawer()}
                >
                <Image source={require('../assets/img/cross.png')}/>
            </TouchableOpacity>
            <BetItem />
        </View>
    )
}

const styles = StyleSheet.create({
    crossWrapper: {
        display: "flex",
        flexDirection: "row-reverse",
    },
    betsContainer: {
        padding: 20
    }
})