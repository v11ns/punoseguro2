import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/index';
import PunoSeguroScreen from '../screens/PunoSeguro';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PunoSeguro" component={PunoSeguroScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

