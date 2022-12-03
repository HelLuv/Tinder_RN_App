import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useState} from "react";

import {CardData} from "../../../types";


interface ChatRowProps {
  matchDetails: CardData;
}

const ChatRow: React.FC<ChatRowProps> = ({matchDetails}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [matchedUserInfo, setMatchedUserInfo] = useState(matchDetails);
  const [lastMessage, setLastMessage] = useState('');

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg shadow-xl"
      onPress={() => navigation.navigate('MessageScreen', {matchDetails})}
    >
      <Image
        className="rounded-full h-16 w-16 mr-4"
        source={{uri: matchedUserInfo?.photoUrl}}
      />

      <View>
        <Text className="text-lg font-semibold">
          {matchedUserInfo?.displayName}
        </Text>
        <Text>{lastMessage || "Say Hi!"}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default ChatRow;