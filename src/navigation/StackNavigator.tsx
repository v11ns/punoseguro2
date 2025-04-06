import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../screens/Inicio';
import PunoSeguro from '../screens/PunoSeguroScreen';
import MenuScreen from '../screens/MenuScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
                <Stack.Screen name="PunoSeguro" component={PunoSeguro} />
                <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
