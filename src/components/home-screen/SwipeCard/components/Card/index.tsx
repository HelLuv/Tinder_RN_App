import * as React from 'react';
import {View, Text, Image} from 'react-native';

import {CardData} from "../../../../../types";


interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({data}) => {

  return (
    <View className="bg-white h-3/4 rounded-xl">
      <Image
        className="absolute top-0 h-full w-full rounded-xl"
        source={{uri: data.photoUrl}}
      />

      <View
        className="absolute bottom-0 bg-white w-full flex-row justify-between items-center h-20 px-6 py-2 rounded-b-xl shadow-xl"
      >
        <View>
          <Text className="text-xl font-bold">
            {data.displayName}
          </Text>
          <Text>{data.occupation}</Text>
        </View>

        <Text className="text-2xl font-bold">{data.age}</Text>
      </View>
    </View>
  )
};

export default Card;