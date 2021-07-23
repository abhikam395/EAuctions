import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import {DefaultTheme } from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#272928'
    },
};

const Stack = createStackNavigator();

export default function MainNavigation(){
    return (
        <NavigationContainer
            theme={MyTheme}>
            <Stack.Navigator 
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}