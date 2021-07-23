import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const image = 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

export default class TrendingBidComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image 
                    source={{uri: image}} 
                    style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>Kabir Singh's Goggles</Text>
                    <Text style={styles.label}>Current bids: 38</Text>
                    <Text style={styles.title}>Market Price: &#x20B9; 200</Text>
                </View>
                <View style={styles.frontView}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
    },
    image: {
        height: 130,
        width: 120,
        borderRadius: 10,
        margin: 10
    },
    title: {
        color: '#E1A801',
        fontWeight: 'bold',
        fontSize: 10
    },
    label: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    info: {
        paddingHorizontal: 15,
        paddingBottom:10
    },
    frontView: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(225, 168, 1, .23)',
        borderRadius: 20
    }
})