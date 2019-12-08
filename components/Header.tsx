import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
export default (props: any) => {


    return (
        <View style={styles.menuWrapper}>
            <TouchableOpacity style={styles.iconWrapper}>
                <Image
                    source={require('../assets/img/icon.png')}    
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuWrapper: {
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    iconWrapper: {
        width: 43
    }
})