import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {ChatScreen, HomeScreen, MessageScreen} from "../screens";


const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MessageScreen" component={MessageScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;