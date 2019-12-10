import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Bets from '../components/Bets'
import HomeScreen from '../screens/HomeScreen'

export default createDrawerNavigator(
    {
        HomeScreen
    },
    {
        contentComponent: Bets,
        drawerPosition: "right"
    }
)
