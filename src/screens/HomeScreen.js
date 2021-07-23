import React from 'react';
import { StatusBar} from 'react-native';
import HomeBottomNavigation from '../navigations/homeBottomNavigation';

export default function HomeScreen(){
    return (
        <> 
            <StatusBar backgroundColor="#272928"/>
            <HomeBottomNavigation />
        </>
    )
}