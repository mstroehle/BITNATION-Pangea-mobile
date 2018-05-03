// @flow

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import i18n from '../../global/i18n';
import { screen } from '../../global/Screens';
import BackgroundImage from '../../components/common/BackgroundImage';
import FakeNavigationBar from '../../components/common/FakeNavigationBar';
import NavigatorComponent from '../../components/common/NavigatorComponent';
import PanelView from '../../components/common/PanelView';
import ScreenTitle from '../../components/common/ScreenTitle';
import Button from '../../components/common/Button';
import type { Navigator } from '../../types/ReactNativeNavigation';
import styles from './styles';
import { startRestoreAccountUsingMnemonic, startAccountCreation } from '../../actions/accounts';
import { type State as AccountsState } from '../../reducers/accounts';
import type { Mnemonic } from '../../types/Mnemonic';

type Props = {
  /**
   * @desc React Native Navigation navigator object.
   */
  navigator: Navigator,
};

type Actions = {
  /**
   * @desc Action to start account process.
   */
  startAccountCreation: () => void,
  /**
   * @desc Action to restore account with mnemonic.
   * @param {Mnemonic} mnemonic Mnemonic to be used.
   */
  startRestoreAccountUsingMnemonic: (mnemonic: Mnemonic) => void
}

class Accounts extends NavigatorComponent<Props & Actions & AccountsState> {
  onCreateAccount = () => {
    this.props.startAccountCreation();
    this.showSecuritySettingsScreen();
  };

  showSecuritySettingsScreen() {
    this.props.navigator.push({
      ...screen('SECURITY_SETTINGS_SCREEN'),
      passProps: {
        isCreating: true,
      },
    });
  }

  onRestoreAccount = () => {
    this.props.navigator.push({
      ...screen('RESTORE_KEY_SCREEN'),
      passProps: {
        onCancel: () => this.props.navigator.pop(),
        onDoneEntering: (mnemonic: Mnemonic) => {
          this.props.startRestoreAccountUsingMnemonic(mnemonic);
          this.showSecuritySettingsScreen();
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.profilesScreenContainer}>
        <BackgroundImage />
        <FakeNavigationBar />
        <View style={styles.bodyAccountContainer}>
          <ScreenTitle title={i18n.t('screens.accounts.title')} />
          <PanelView body={i18n.t('screens.accounts.introduction')} />
          <View style={{}}>
            <Button
              style={styles.panelButton}
              title={i18n.t('screens.accounts.newAccount')}
              onPress={this.onCreateAccount}
            />
            <Button
              style={styles.panelButton}
              title={i18n.t('screens.accounts.restoreAccount')}
              onPress={this.onRestoreAccount}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.accounts,
});

const mapDispatchToProps = dispatch => ({
  startAccountCreation() {
    dispatch(startAccountCreation());
  },
  startRestoreAccountUsingMnemonic(mnemonic) {
    dispatch(startRestoreAccountUsingMnemonic(mnemonic));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);