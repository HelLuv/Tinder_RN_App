import * as React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import useAuth from "../../../hooks/useAuth";


const Login: React.FC = () => {
  const {login} = useAuth();


  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{uri: "https://tinder.com/static/tinder.png"}}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          className="absolute bottom-40 w-52 bg-white p-4 rounded-2xl"
          style={{marginHorizontal: "25%"}}
          onPress={() => login()}
        >
          <Text className="font-semibold text-center text-lg">Sign In</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
};

export default Login;