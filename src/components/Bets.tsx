import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as types from '../constants/ActionTypes'
import BetItem from './BetItem'

const Bets = props => {
    return (
        <View style={styles.betsContainer}>
            <TouchableOpacity 
                style={styles.crossWrapper}
                onPress={() => props.navigation.closeDrawer()}
                >
                <Image source={require('../assets/img/cross.png')}/>
            </TouchableOpacity>
            {props.bets.map((betObj) => {
                const chosenGame = props.data.find((game) => {
                    return game.id === betObj.gameId
                })
                return chosenGame && (
                <BetItem 
                    name={chosenGame.name}
                    key={betObj.id}
                    price={betObj.price}
                    id={betObj.id}                   
                    handleDelete={props.deleteBet}
                />
                )
            })}
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

const mapStateToProps = state => {
    return {
        data: state.data,
        bets: state.bets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBet: id => dispatch({type: types.PICK_BET, betObj: {id}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets)