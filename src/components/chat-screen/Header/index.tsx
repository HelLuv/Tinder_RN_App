import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";


interface HeaderProps {
  title: string;
  callEnabled?: boolean;
}

const Header: React.FC<HeaderProps> = ({callEnabled, title}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View className="p-2 flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2"
        >

        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Header;