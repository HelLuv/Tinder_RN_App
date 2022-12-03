import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {

  return (
    <View className="flex flex-row justify-evenly pb-8">
      <TouchableOpacity
        activeOpacity={0.5}
        className="items-center justify-center rounded-full w-16 h-16 bg-red-200"
        onPress={() => console.log('swipeLeft')}
      >
        <Entypo name="cross" size={36} color="red"/>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        className="items-center justify-center rounded-full w-16 h-16 bg-green-200"
        onPress={() => console.log('swipeRight')}
      >
        <AntDesign name="heart" size={24} color="green"/>
      </TouchableOpacity>
    </View>
  )
};

export default Footer;