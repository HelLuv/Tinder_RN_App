import * as React from 'react';
import {View, Text} from 'react-native';

import {Header} from "../../components/@common";
import {ChatList} from "../../components/chat-screen";


const ChatScreen: React.FC = () => {

  return (
    <View className="pt-5">
      <Header title="Chat"/>
      <ChatList/>
    </View>
  )
};

export default ChatScreen;