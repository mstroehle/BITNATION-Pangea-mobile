import { MediaQueryStyleSheet } from 'react-native-responsive';
import { Dimensions } from 'react-native';

import Colors from '../../global/Colors';
import GlobalStyles from '../../global/Styles';

const { height, width } = Dimensions.get('window');

const styles = MediaQueryStyleSheet.create(
  {
    ...GlobalStyles,
    stackView: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      flex: 1,
      marginLeft: 8,
      marginRight: 8,
    },
    activityPanelContainer: {
      flex: 1,
    },
    activityPanel: {
      flex: 1,
    },
    bottomContainer: {
      flex: 2,
      flexDirection: 'row',
    },
    nationsPanel: {
      flex: 1,
    },
    rightContainer: {
      marginLeft: 8,
      flex: 1,
    },
    walletPanel: {},
    warningPanel: {
      flex: 1,
    },
  });
export default styles;