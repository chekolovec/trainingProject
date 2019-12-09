import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default (props: any) => {
    const info = props.data.info
    console.log(info, 'props')
    return null
    return  info.map((info: any) => (
        <View style={styles.contentWrapper}>
            <View style={styles.gameWrapper}>
                <Text style={styles.title}>
                    {info.name}
                    Man. United vs Chelsea
                </Text>
                <Text style={styles.objective}>
                    To WIN
                </Text>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.betButton}>
                        <Text>Man. United</Text>
                        <Text style={styles.textCenter}>1.2</Text>
                    </View>
                    <View style={styles.betButton}>
                        <Text>Chelsea</Text>
                        <Text style={styles.textCenter}>2.2</Text>
                    </View>
                </View>
            </View>
        </View>
        )
    )
}


const styles = StyleSheet.create({
    contentWrapper: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    buttonsWrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center'
    },
    gameWrapper: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        borderWidth: 1
    },
    objective: {
        paddingTop: 5,
        paddingBottom: 5
    },
    textCenter: {
        textAlign: 'center'
    },
    betButton: {
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: 'grey'
    }
})
