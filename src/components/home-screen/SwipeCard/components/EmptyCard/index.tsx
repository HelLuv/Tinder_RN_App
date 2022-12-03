import * as React from 'react';
import {View, Text, Image} from 'react-native';


const EmptyCard: React.FC = () => {

  return (
    <View className="relative bg-white h-3/4 rounded-xl justify-center items-center shadow-xls">
      <Text className="font-bold pb-5">No more profiles</Text>
      <Image
        className="h-20 w-full"
        style={{height: 100, width: 100}}
        source={{uri: 'https://links.papareact.com/6gb'}}
      />
    </View>
  )
};

export default EmptyCard;