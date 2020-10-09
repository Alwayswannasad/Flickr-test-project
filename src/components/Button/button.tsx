import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../utils/constants';

type Props = {
  title: string;
  disabled?: boolean;
  style?: [ViewStyle, ViewStyle];
  textStyle?: TextStyle;
  color?: any;
  isDisable?: boolean;
  onPress: () => boolean;
  isLoading?: boolean;
  isIcon?: boolean;
  borderStyle?: [ViewStyle, ViewStyle];
};

class Button extends Component<Props> {
  public render() {
    const {
      title,
      style,
      onPress,
      textStyle,
      color,
      isDisable,
      isLoading,
      borderStyle,
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          style,
          isDisable && styles.isDisableBtn,
          borderStyle,
          {borderColor: color},
          styles.btnCont,
        ]}
        onPress={onPress}
        disabled={isDisable}>
        <View style={styles.btnCont}>
          <Text style={[textStyle, {color}]}>
            {isLoading ? 'LOADING' : title}
          </Text>
          {isLoading && (
            <ActivityIndicator size={'small'} style={styles.loadIndicator} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  isDisableBtn: {
    backgroundColor: COLORS.statNotStart,
  },
  btnCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadIndicator: {
    marginLeft: 20,
  },
});

export default Button;
