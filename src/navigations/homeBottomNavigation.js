import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import MoviesScreen from '../screens/MoviesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MerchandiseScreen from '../screens/MerchandiseScreen';
import EAuctionScreen from '../screens/EAuctionScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function HomeBottomNavigation(){
    return (
        <Tab.Navigator
            initialRouteName="EAuction" 
            tabBarOptions={{
                style: {
                    height: 60, 
                    backgroundColor: '#272928', 
                    elevation: 0, 
                    borderTopWidth: 0
                },
                activeTintColor: 'white',
                inactiveTintColor: '#4E504F',
                labelStyle: {fontSize: 13, fontWeight: 'bold'},
                safeAreaInsets: {bottom: 10}}}>
            <Tab.Screen 
                name="Movies" 
                component={MoviesScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons 
                            name="movie-open-outline"
                            color="#E1A801"
                            style={!focused ? styles.notFocus : ''}
                            size={20}/>
                    ),
                }}/>
            <Tab.Screen 
                name="EAuction" 
                component={EAuctionScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons 
                            name="stream"
                            color="#E1A801"
                            style={!focused ? styles.notFocus : ''}
                            size={20}/>
                    )
                }}/>
            <Tab.Screen 
                name="Marchandise" 
                component={MerchandiseScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome 
                            name="mobile-phone"
                            color="#E1A801"
                            style={!focused ? styles.notFocus : ''}
                            size={28}/>
                    )
                }}/>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome 
                            name="user-o"
                            color="#E1A801"
                            style={!focused ? styles.notFocus : ''}
                            size={20}/>
                    )
                }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notFocus: {
        opacity: .2
    }
})