import { StyleSheet } from 'react-native';

import colors from '../../constants/colors'

export default StyleSheet.create({
  contentWrapper: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  titleBlack: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    color: colors.white
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  gameWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    borderWidth: 1,
    marginTop: 20,
  },
  gameWrapperBlack: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    borderWidth: 1,
    marginTop: 20,
    borderColor: colors.white
  },
  objective: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  objectiveBlack: {
    paddingTop: 5,
    paddingBottom: 5,
    color: colors.white
  },
  textCenter: {
    textAlign: 'center',
  },
});
