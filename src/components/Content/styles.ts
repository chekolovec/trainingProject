import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentWrapper: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
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
  objective: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  textCenter: {
    textAlign: 'center',
  },
});
