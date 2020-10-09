import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
// import PhotoView from "react-native-photo-view";
import { Icons } from "../../assets/icons/index";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS } from "../../utils/constants";

interface IProps {
  fullImg: string;
  closeImage: () => void;
}
class ZoomImg extends Component<IProps> {
  render() {
    const { fullImg, closeImage } = this.props;

    return (
      <View style={styles.container}>
        <View  style = {{
          position: 'absolute',
          zIndex: 9999999,
          // width: 100,
          top: 50,
          right: 25,
       
          // height: 100,
          // backgroundColor: COLORS.whiteBg,
        }}>
        <TouchableWithoutFeedback
          onPress = { closeImage }
        >
          <View style = {{   width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: COLORS.whiteBg,
          justifyContent: 'center',
          alignItems: 'center'}}>


       <Image 
        style = {{ 
          resizeMode: 'contain',
          width: 20,
          height: 20,
        }}
        source = { Icons.clearSearch } />
        </View>
        </TouchableWithoutFeedback>
        </View>

        {/* <PhotoView
          source={{ uri: fullImg }}
          minimumZoomScale={1}
          maximumZoomScale={3}
          style     = {{ width: "100%", height: "100%", backgroundColor: 'rgba(255,255,255,0.7)'}}
        //   onViewTap = { closeImage }
        /> */}
      </View>
    );
  }
}

export default ZoomImg;
