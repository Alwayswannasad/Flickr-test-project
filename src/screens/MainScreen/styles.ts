import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  btnStyle :{
    backgroundColor: COLORS.mainButton,
    width: '50%',
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  mainScrnHeaderContStyle: {
    top: 0
  },
  imageListContainer: {
    // flex: 1,
    justifyContent: 'center',
  }
});
export default styles;
