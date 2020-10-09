import {StyleSheet} from 'react-native';
import { COLORS, TextSize } from '../../utils/constants';
import {normalize } from '../../utils/helpers';

const styles = StyleSheet.create({
  loginInputWrap: {
    height: 40,
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    paddingHorizontal: 30,
    zIndex: -1,
  },
  loginInput: {
    paddingVertical: 9,
    fontSize: TextSize.txtForElements,
    color: COLORS.simpleTextColor,
    opacity: 0.9,
    flex: 1,
    borderBottomColor: COLORS.borderBtmInput,
    borderBottomWidth: 1,
  },
  inputActiveSetBorder: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.mainColor,
  },
  errorSetBorder: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.errorText,
  },
  inputNames: {
    fontSize: normalize(TextSize.nameTxt),
    position: 'absolute',
    color: COLORS.mainColor,
    top: -6,
    zIndex: -1,
  },
  notValidInputText: {
    fontSize: TextSize.nameTxt,
    color: COLORS.errorText,
  },
  styleInputActive: {
    color: COLORS.mainColor,
  },
  notEditable: {
    color: COLORS.textColor,
  },
});

export default styles;
