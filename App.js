import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DeadLiftScreen from './screens/DeadLiftScreen';
import PressScreen from './screens/PressScreen';
import SquatScreen from './screens/SquatScreen';
import DietScreen from './screens/DietScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="Deadlift" component={DeadLiftScreen} />
        <Stack.Screen name="Press" component={PressScreen} />
        <Stack.Screen name="Squat" component={SquatScreen} />
        <Stack.Screen name="Diet" component={DietScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

