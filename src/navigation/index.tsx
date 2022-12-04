import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {ChatScreen, HomeScreen, MessageScreen, LoginScreen} from "../screens";
import useAuth from "../hooks/useAuth";


const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Group>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}}/>
            <Stack.Screen name="MessageScreen" component={MessageScreen} options={{headerShown: false}}/>
          </Stack.Group>
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;