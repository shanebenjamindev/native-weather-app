import React from 'react';
import { NavigationContainer } from '@react-navigation/navtive'
import HomeScreen from '../screens/HomeScreen';
export default function AppNavigation() {

    return (

        <NavigationContainer>
            <Stack.Navigation>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headersShown: false }} />
            </Stack.Navigation>
        </NavigationContainer>
    )

}