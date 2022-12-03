import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useState} from "react";
import ChatRow from "../ChatRow";
import {CardData} from "../../../types";


const ChatList: React.FC = () => {
  const mockUserCardData: Array<CardData> = [{
    id: 1,
    photoUrl: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    displayName: 'Rafaella Mendes Diniz',
    age: 20,
    occupation: 'Earth, Milky Way'
  }];
  const [matches, setMatches] = useState(mockUserCardData);

  return (
    matches.length > 0 ? (
      <FlatList
        className="h-full"
        data={matches}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => <ChatRow matchDetails={item}/>}
      >
        <Text>ChatList</Text>
      </FlatList>
    ) : (
      <View className="p-5">
        <Text className="text-center text-lg">No matches at the moment 🥹</Text>
      </View>
    )

  )
};

export default ChatList;