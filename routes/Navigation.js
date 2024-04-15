import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/screens/Login';
import Sign from '../src/screens/Sign';
import Home from '../src/screens/Home';
import CarInfo from '../src/composants/CarInfo';

const Navigation = () => {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="connexion" screenOptions={{headerShown: false}}>
                <Stack.Screen name='connexion' component={Login} />
                <Stack.Screen name='inscription' component={Sign} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='carInfo' component={CarInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({})

export default Navigation;
