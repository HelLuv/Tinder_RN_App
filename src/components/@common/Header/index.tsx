import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons'
import Foundation from '@expo/vector-icons/Foundation'


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
          <Ionicons
            name="chevron-back-outline"
            size={34}
            color="#ff5864"
          />
        </TouchableOpacity>
        <Text className="text-2xl font-bold pl-2">{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity className="rounded-full mr-4 py-3 px-4 bg-red-200">
          <Foundation
            name='telephone'
            size={20}
            color="red"
          />
        </TouchableOpacity>
      )}
    </View>
  )
};

export default Header;