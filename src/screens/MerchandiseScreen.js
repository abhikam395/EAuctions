import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MerchandiseScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>MerchandiseScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})