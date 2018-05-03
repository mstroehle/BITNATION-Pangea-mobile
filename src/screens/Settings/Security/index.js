// @flow

import React from 'react';
import { Slider, Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import NavigatorComponent from '../../../components/common/NavigatorComponent';
import type { Navigator } from '../../../types/ReactNativeNavigation';
import i18n from '../../../global/i18n';
import { screen, androidNavigationButtons } from '../../../global/Screens';
import ScreenTitle from '../../../components/common/ScreenTitle';
import BackgroundImage from '../../../components/common/BackgroundImage';
import FakeNavigationBar from '../../../components/common/FakeNavigationBar';
import Button from '../../../components/common/Button';
import type { State as SettingsState } from '../../../reducers/settings';
import SettingsListItem from '../../../components/common/SettingsListItem';
import { changePasscodeLength, changeUseNumericPasscode } from '../../../actions/settings';
import Colors from '../../../global/colors';
import { MAXIMAL_PIN_CODE_LENGTH, MINIMAL_PIN_CODE_LENGTH } from '../../../global/Constants';
import type { State as AccountsState } from '../../../reducers/accounts';
import { isCreatingAccount } from '../../../reducers/accounts';

type Props = {
  /**
   * @desc React Native Navigation navigator object.
   */
  navigator: Navigator,
  /**
   * @desc Accounts redux state.
   */
  accounts: AccountsState,
};

type Actions = {
  /**
   * @desc Action to change desired using of numeric passcode.
   */
  changeUseNumericPasscode: (boolean) => void,
  /**
   * @desc Action to change desired length of numeric passcode.
   */
  changePasscodeLength: (number) => void,
};

class SecuritySettingsScreen extends NavigatorComponent<Props & Actions & SettingsState> {
  static navigatorButtons = { ...androidNavigationButtons };

  onNavBarButtonPress(id: string): void {
    if (id === 'cancel') {
      this.onPreviousPressed();
    }
  }

  onPreviousPressed = () => {
    this.props.navigator.pop();
  };

  onPasscodeCreated = () => {
    this.props.navigator.dismissModal().then(() => {
      this.props.navigator.push(screen('ACCOUNT_CREATE_DEVELOPER_SETTINGS'));
    });
  };

  /**
   * @desc It is used on create account flow.
   * @return {void}
   */
  onNextPressed = () => {
    const { creatingAccount } = this.props.accounts;
    if (creatingAccount === null) {
      console.log('FAIL! Creating account is null when next button on security settings is pressed, that should never happen');
      return;
    }

    this.props.navigator.showModal({
      ...screen('CREATE_PASSCODE_SCREEN'),
      passProps: {
        accountId: creatingAccount.id,
        onSuccess: this.onPasscodeCreated,
        onCancel: () => this.props.navigator.dismissModal(),
      },
    });
  };

  render() {
    const { passcodeInfo } = this.props;
    const isCreating = isCreatingAccount(this.props.accounts);

    return (
      <View style={styles.screenContainer}>
        <BackgroundImage />
        <FakeNavigationBar />
        <View style={styles.bodyContainer}>
          <ScreenTitle title={i18n.t('screens.securitySettings.title')} />
          <SettingsListItem
            id='useNumericPasscode'
            text={i18n.t('screens.securitySettings.useNumericPasscode')}
            additionalViewKind={{
              type: 'switch',
              value: passcodeInfo.type === 'pinCode',
              onValueChange: this.props.changeUseNumericPasscode,
            }}
            style={styles.noflex}
          />

          {
            passcodeInfo.type === 'pinCode' &&
            <View style={styles.passCodeLengthItemContainer}>
              <View style={styles.passCodeLengthItem}>
                <Text style={styles.listItemText} numberOfLines={1}>
                  {i18n.t('screens.securitySettings.passcodeLength')}
                </Text>
                <Text style={styles.passCodeLengthNumberText} numberOfLines={1}>
                  {passcodeInfo.length}
                </Text>
              </View>
              <View style={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={MINIMAL_PIN_CODE_LENGTH}
                  maximumValue={MAXIMAL_PIN_CODE_LENGTH}
                  step={1}
                  value={passcodeInfo.length}
                  onValueChange={this.props.changePasscodeLength}
                  minimumTrackTintColor={Colors.BitnationHighlightColor}
                />
              </View>
            </View>
          }

          {
            isCreating === false &&
            <SettingsListItem
              id='changePasscode'
              text={i18n.t('screens.securitySettings.changePasscode')}
              style={styles.noflex}
            />
          }
        </View>
        {isCreating &&
        <View style={styles.bodyContainer}>
          <View style={styles.buttonContainerMultiple}>
            <Button
              style={styles.panelButton}
              title={i18n.t('screens.accounts.create.prev')}
              onPress={this.onPreviousPressed}
            />
            <Button
              style={styles.panelButton}
              title={i18n.t('screens.accounts.create.next')}
              onPress={this.onNextPressed}
            />
          </View>
        </View>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settings,
  accounts: state.accounts,
});

const mapDispatchToProps = dispatch => ({
  changeUseNumericPasscode(useNumericPasscode: boolean) {
    dispatch(changeUseNumericPasscode(useNumericPasscode));
  },
  changePasscodeLength(length: number) {
    dispatch(changePasscodeLength(length));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SecuritySettingsScreen);