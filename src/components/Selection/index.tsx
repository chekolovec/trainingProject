import React, { useMemo } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import SelectionConfig from './types'
import styles from './styles'

export default ({ bets, betObject, onAddBet, onDeleteBet, gameId }: SelectionConfig) => {
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
        <Text>{betObject.name}</Text>
        <Text style={styles.textCenter}>{betObject.price}</Text>
      </TouchableOpacity>
    )
}