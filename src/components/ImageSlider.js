import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvH_5hWTrkw0ZwPpShI8klr3LVm3gQSCAuIA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU'
]

export default class ImageSlider extends Component{
    render(){
        return (
            <View style={styles.container}>
                <SliderBox
                    images={images}
                    sliderBoxHeight={100}
                    ImageComponentStyle={styles.image}
                    dotColor="#E1A801"
                    inactiveDotColor="rgba(225, 168, 1, .4)"
                    resizeMethod="resize"
                    resizeMode="cover"
                    paginationBoxStyle={styles.paginationContainer}
                    autoplay={true}
                    dotStyle={styles.dotStyle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 30,
    },
    image: {
        borderRadius: 10,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: -25,
        width: -0
    },
    dotStyle: {
        height: 8,
        width: 8,
        margin: 0
    }
    
})