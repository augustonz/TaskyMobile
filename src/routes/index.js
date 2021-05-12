import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from '../pages/Tasks';
import Login from '../pages/Login';
import Header from '../components/Header';
import SingUp from '../pages/SingUp';

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <AppStack.Navigator
            screenOptions={{ header: Header }}
            initialRouteName="Login" >
            <AppStack.Screen
                name="Login"
                component={Login}
            />
            <AppStack.Screen
                name="SignUp"
                component={SingUp}
            />
            <AppStack.Screen
                name="Tasks"
                component={Tasks} />
        </AppStack.Navigator>
    );
}