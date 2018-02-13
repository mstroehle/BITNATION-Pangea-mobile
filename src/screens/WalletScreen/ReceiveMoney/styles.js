import { StyleSheet } from 'react-native';

import Colors from '../../../global/colors';
import GlobalStyles from '../../../global/Styles'

export default styles = StyleSheet.create({
  ...GlobalStyles,
  bodyContainer: {
    marginLeft: 8,
    marginRight: 8,
  },
  codeText: {
    fontSize: 14,
    color: Colors.navButtonTextColor,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

});