import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})