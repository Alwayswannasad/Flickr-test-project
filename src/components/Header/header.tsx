import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Waves from '../Waves/waves';

const HeaderWaves = ({headerTitle, headerContainerStyle}) => {
  return (
    <View style={headerContainerStyle}>
      <Waves customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
    </View>
  );
}

export default HeaderWaves;
const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    paddingTop: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
});
