import React from 'react';
import FastImage from 'react-native-fast-image';

const ListImage = ({imgUrl}) => (
  <FastImage
    style={{width: 200, height: 200}}
    source={{
      uri: imgUrl,
      headers: {Authorization: 'someAuthToken'},
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

export default ListImage;