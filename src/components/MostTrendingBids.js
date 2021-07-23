import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TrendingBidComponent from './TrendingBidComponent';

const BIDS = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
]

export default class MostTrendingBids extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Most Trending Bids :</Text>
                <FlatList
                    data={BIDS}
                    horizontal={true}
                    style={styles.list}
                    keyExtractor={item => item.id.toString()}
                    renderItem={() => <TrendingBidComponent />}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // height: 400
    },
    title: {
        color: '#E1A801',
        fontSize: 16,
        fontWeight: 'bold'
    },
    separator: {
        width: 15
    },
    list: {
        marginVertical: 10
    }
})