import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';

export default function Navigation() {
    return (
        <NavigationContainer>
            {/* Add your navigators here */}
            <DrawerNavigator/>
        </NavigationContainer>
    );
}