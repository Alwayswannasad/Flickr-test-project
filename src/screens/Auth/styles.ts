import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  authContainer: {
    height: '100%',
    backgroundColor: COLORS.mainBackground,
    // alignContent: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  btnStyle: {
    width: '80%',
    height: 40,
    backgroundColor: COLORS.mainColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 30,
  },
  authScrnHeaderContStyle: {
    flex: 1,
  }
});
export default styles;
