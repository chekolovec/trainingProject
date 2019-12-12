import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  menuWrapper: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    padding: 20,
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
  },
  iconWrapper: {
    width: 43,
  },
});
