import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

export default StyleSheet.create({    
  betButton: {
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: colors.grey,
  },
  betButtonActive: {
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: colors.grey,
    backgroundColor: colors.green,
  },
  textCenter: {
    textAlign: 'center',
  },
})