import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {NavigationProp, useNavigation} from "@react-navigation/native";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const user = {photoURL: 'https://avatars.githubusercontent.com/u/76000345?s=40&v=4'}
  return (
    <View className="flex-row items-center justify-between px-5">
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => console.log('logout')}
      >
        <Image
          source={{uri: user.photoURL}}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => console.log('navigate to Modal')}
      >
        <Image
          source={require("../../../../assets/logo.png")}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('ChatScreen')}
      >
        <Ionicons name="chatbubbles-sharp" size={30} color="#ff5864"/>
      </TouchableOpacity>
    </View>
  )
};

export default Header;