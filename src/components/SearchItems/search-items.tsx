import React, { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import {observer} from 'mobx-react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import ImageView from "react-native-image-viewing";
import ImageFooter from './ImageFooter';

const SearchItems = ({data, idx, imagesLength, allItems}) => {
    const [currentImageIndex, setImageIndex] = useState(0);
    const [images, setImages] = useState(allItems);
    const [titleOfImg, setTitleOfImg] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const {server, id, secret , title} = data;
    const imgURL = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

    const onSelect = (index, title) => {
        setImageIndex(index);
        setTitleOfImg(title)
        setIsVisible(true);
      };
    const onRequestClose = () => setIsVisible(false);
    const onLongPress = (image) => {
        Alert.alert("Long Pressed", image.uri);
      };
    const titleChanges = (i) => {
        allItems.map((item, index) => index === i && 
        setTitleOfImg(item.title))
      }

    return(
        <View>
            <ImageView
                images={images}
                imageIndex={currentImageIndex}
                visible={isVisible}
                onRequestClose={onRequestClose}
                onLongPress={onLongPress}
                presentationStyle="overFullScreen"
                onImageIndexChange={(a) => titleChanges(a)}
                FooterComponent={({ imageIndex }) => (
                    <ImageFooter 
                        imageIndex={imageIndex} 
                        imagesCount={imagesLength} 
                        imageTitle={titleOfImg} 
                    />
                  )}
            />
                <View style={{
                    flex: 1,
              flexDirection: 'column',
              margin: 5,
              alignItems: 'center', width: '100%'}}>
                <TouchableOpacity
                        style={styles.button}
                        key={`${imgURL}_${idx}`}
                        activeOpacity={0.8}
                        onPress={() => onSelect(idx, title)}
                >
                    <FastImage 
                        source={{uri: imgURL}}
                        style={styles.imageSearchStyle} 
                        resizeMode={FastImage.resizeMode.contain}
                    />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default observer(SearchItems);