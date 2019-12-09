import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native'

export default () => {
    return (
        <View style={styles.betItem}>
            <Text style={styles.title}>
                Man United To WIN
            </Text>
            <Text style={styles.coefText}>
                1.2
            </Text>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.deleteButton}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    betItem: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 2
    },
    title: {
        textAlign: "center",
        paddingBottom: 10
    },
    deleteButton: {
        width: 100,
        backgroundColor: 'grey',
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 5,
        alignSelf: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
    coefText: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10
    }
})