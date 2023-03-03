import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgotPassword, Register } from '../screens';
import Home from '../screens/home/Home';
import Setting from '../screens/home/Setting';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const HomeDrawer = () => {

    console.log(Drawer);
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, }}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Setting' component={Setting} />
        </Drawer.Navigator>
    )
}


function AuthNavigator() {
    console.log(Stack);
    return (
        <Stack.Navigator useLegacyImplementation screenOptions={{
            headerShown: false
        }} initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='HomeDrawer' component={HomeDrawer} />
        </Stack.Navigator>
    );
}
export default AuthNavigator;