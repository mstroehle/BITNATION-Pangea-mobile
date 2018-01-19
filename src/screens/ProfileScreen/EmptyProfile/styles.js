import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../../global/Colors';
import GlobalStyles from '../../../global/Styles';

const styles = MediaQueryStyleSheet.create({

  container: {
    ...GlobalStyles.screenContainer,
  },

  messageView: {
    marginLeft: 8,
    marginRight: 8,
  },
  
  topSpacer: {
    flex: 3,
  },

  bottomSpacer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default styles;