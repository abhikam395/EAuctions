import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const image = 'data:image/jpeg;base64,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';

export default class MostViewComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Most Viewed:</Text>
                <View style={styles.card}>
                    <Image source={{uri: image}} style={styles.image}/>
                    <View style={styles.info}>
                        <TouchableOpacity 
                            style={styles.bidNowButton}
                            activeOpacity={.5}>
                            <Text style={styles.bidNowButtonLabel}>Bid now</Text>
                        </TouchableOpacity>
                        <Text style={styles.infoTitle}>Thor's Mjolnir</Text>
                        <Text style={styles.description}>This tutorial explains how to create sample / dummy data. It is very useful to know how we can build sample data to practice R exercises</Text>
                        <Text style={styles.price}>&#x20B9; 1500</Text>
                        <View style={styles.timer}>
                            <SimpleLineIcons 
                                name="clock"
                                size={13}/>
                            <Text style={styles.timeRemain}>04d 03h 15m 12s</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        height: 300
    },
    title: {
        color: '#E1A801',
        fontSize: 16,
        fontWeight: 'bold'
    },
    card: {
        height: 300,
        marginVertical: 15
    },
    info: {
        width: '100%',
        backgroundColor: '#E1A801',
        position: 'absolute',
        bottom: 0,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    infoTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#263238'
    },
    description: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#263238',
        marginVertical: 10
    },
    price: {
        fontSize: 16,
        color: '#263238',
        fontWeight: 'bold'
    },
    timer: {
        backgroundColor: 'white',
        borderRadius: 15,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    timeRemain: {
        fontSize: 11,
        fontWeight: 'bold',
        marginLeft: 10
    },
    bidNowButton: {
        backgroundColor: '#263238',
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        top: -20,
        right: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        elevation: 1
    },
    bidNowButtonLabel: {
        color: '#E1A801',
        fontWeight: 'bold',
        fontSize: 13
    },
    image: {
        height: 200,
        borderRadius: 10
    }
})