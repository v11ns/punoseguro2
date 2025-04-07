import React from 'react';
import Inicio from '../screens/Inicio';
import PunoSeguro from '../screens/PunoSeguroScreen';
import MenuScreen from '../screens/MenuScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './ButtonTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Tabss" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="PunoSeguro" component={PunoSeguro} />
        {/** <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />*/}
    </Stack.Navigator>
    );
};

export default StackNavigator;
