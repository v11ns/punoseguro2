import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PunoSeguro from '../screens/PunoSeguroScreen';
import StackNavigator from './StackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="StackNav" component={StackNavigator} />
        <Drawer.Screen name="PunoSeguro" component={PunoSeguro} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
