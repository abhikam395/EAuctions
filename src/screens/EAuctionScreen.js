import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageSlider from '../components/ImageSlider';
import MostTrendingBids from '../components/MostTrendingBids';
import MostViewComponent from '../components/MostViewComponent';


export default class EAuctionScreen extends Component{
    render(){
        return (
            <ScrollView 
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <Entypo 
                        name="clock"
                        color="#E1A801"
                        size={30}/>
                    <Text style={styles.title}>E-Auctions</Text>
                </View>
                <ImageSlider />
                <MostTrendingBids />
                <MostViewComponent />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        color: '#E1A801',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    contentContainer: {
        paddingBottom: 100
    }
})