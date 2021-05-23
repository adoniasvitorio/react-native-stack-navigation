import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './pages/FirstScreen';
import SecondScreen from './pages/SecondScreen';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FirstScreen" component={ FirstScreen } />
                <Stack.Screen name="SecondScreen" component={ SecondScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}