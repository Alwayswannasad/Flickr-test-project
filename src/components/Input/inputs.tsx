import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

type Props = {
  value: string;
  secureTextEntry: boolean;
  inputName: string;
  title: string;
  textInput: object;
  isValid: boolean;
  error: string;
  isEditable?: boolean;
  setFieldTouched?: (inputName: string) => boolean;
  autoCapitalize: string;
  handleInputChange: (
    text: string,
    inputName?: string,
    arg3?: () => void,
  ) => void;
  keyboardType?: string;
  setFieldValue(): boolean;
};

type State = {
  focusedInput: boolean;
};
class InputFields extends Component<Props, State> {
  state = {
    focusedInput: false,
  };

  setTextInputRef = (element: React.ReactNode) => {
    this.textInput = element;
  };

  focusTextInput = () => {
    const {setFieldTouched, inputName} = this.props;

    if (this.textInput && this.textInput.isFocused()) {
      this.setState({
        focusedInput: true,
      });
    }
  };

  onBlurEffect = () => {
    const {setFieldTouched, inputName} = this.props;

    this.setState({
      focusedInput: false,
    });
  };

  public render() {
    const {
      value,
      handleInputChange,
      secureTextEntry,
      inputName,
      title,
      isValid,
      setFieldValue,
      error,
      isEditable,
      autoCapitalize,
      keyboardType,
    } = this.props;
    return (
      <View style={styles.loginInputWrap}>
        <View style={{position: 'relative'}}>
          <Text
            style={[
              styles.inputNames,
              this.state.focusedInput && styles.styleInputActive,
              !isValid && error && styles.notValidInputText,
            ]}>
            {title}
          </Text>
        </View>
        <TextInput
          ref={this.setTextInputRef}
          value={value}
          onFocus={this.focusTextInput}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          onChangeText={(text) =>
            handleInputChange(text, inputName, setFieldValue)
          }
          style={[
            styles.loginInput,
            this.state.focusedInput && styles.inputActiveSetBorder,
            !isValid && error && styles.errorSetBorder,
            !isEditable && styles.notEditable,
          ]}
          onBlur={this.onBlurEffect}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          editable={isEditable}
          returnKeyType="done"
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}
export default InputFields;
