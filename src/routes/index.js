/* eslint-disable react/prop-types */
/**
 * Estrutura de navegação do App.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

/** Importação das telas */
import Home from '../screens/Home/Home';
import Pokedex from '../screens/Pokedex/Pokedex';

/** Criando Stack. Navigators que sejam uma stack utilizarão Stack.Navigator e Stack.Screen */
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                headerMode="none"
                screenOptions={{
                    gestureEnabled: false,
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Pokedex" component={Pokedex} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
