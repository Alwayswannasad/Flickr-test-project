import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function Waves({customStyles}) {
  return (
    <View style={customStyles}>
      <View style={{backgroundColor: '#402D61', height: 150}}>
        <Svg
          height="90%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{position: 'absolute', top: 100}}>
          <Path
            fill="#402D61"
            d="M0,96L40,133.3C80,171,160,245,240,245.3C320,245,400,171,480,149.3C560,128,640,160,720,170.7C800,181,880,171,960,138.7C1040,107,1120,53,1200,80C1280,107,1360,213,1400,266.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
