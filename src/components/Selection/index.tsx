import React, { useMemo, useContext } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import SelectionConfig from './types'
import styles from './styles'
import {ThemeContext} from '../../context'

export default ({ bets, betObject, onAddBet, onDeleteBet, gameId }: SelectionConfig) => {
  const { isThemeBlack } = useContext(ThemeContext)

  const handleBet = (obj: object, id: string) => () => {
    if(bets.some((bet) => bet.id === betObject.id)) {
      onDeleteBet(obj, id)
    } else {
      onAddBet(obj, id)
    }

  }
  const isActive = useMemo(() => bets.some((bet: {id: string}) => bet.id === betObject.id), [bets, betObject.id])
  return (        
      <TouchableOpacity
      style={ 
              isActive
              ? styles.betButtonActive
              : styles.betButton
            }
      key={betObject.name}
      onPress={handleBet(betObject, gameId)}
    >
      <Text style={
        isThemeBlack ?
        styles.name :
        ''
      }>{betObject.name}</Text>
      <Text style={
        isThemeBlack ?
        styles.priceBlack :
        styles.textCenter
        }>{betObject.price}</Text>
    </TouchableOpacity>
  )
}