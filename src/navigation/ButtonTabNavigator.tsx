import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../screens/Inicio';
import PunoSeguro from '../screens/PunoSeguroScreen';
import EmergencyScreen from '../screens/EmergencyScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Inicio} options={{ headerShown: false}} />
      <Tab.Screen name="PuSeguro" component={PunoSeguro} />
      <Tab.Screen name="Emergency" component={EmergencyScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
