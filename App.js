import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUpScreen';
import Login from './LoginScreen';
import Best from './Best';
import Wishlist from './Wishlist';
import Shop from './shop';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name='Best' component={Best} options={{headerShown:false}}/>
        <Stack.Screen name='Wishlist' component={Wishlist} options={{headerShown:false}}/>
        <Stack.Screen name='Shop' component={Shop} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}