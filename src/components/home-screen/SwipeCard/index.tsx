import * as React from 'react';
import {View} from 'react-native';
import Swiper from "react-native-deck-swiper";

import Card from "./components/Card";
import EmptyCard from "./components/EmptyCard";
import {CardData} from "../../../types";


interface SwipeCardProps {

}

const SwipeCard: React.FC<SwipeCardProps> = ({}) => {

  const mockUserCardData: Array<CardData> = [{
    id: 1,
    photoUrl: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    displayName: 'Rafaella Mendes Diniz',
    age: 20,
    occupation: 'Earth, Milky Way'
  }];

  return (
    <View className="flex-1 -mt-6 text-red-500">
      <Swiper
        containerStyle={{backgroundColor: 'transparent'}}
        backgroundColor={"#4FD0E9"}
        stackSize={5}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        onSwipedLeft={(cardIndex) => {
          console.log(cardIndex)
        }}
        onSwipedRight={(cardIndex) => {
          console.log(cardIndex)
        }}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                textAlign: "right",
                color: "#EF4444",
              }
            }
          },
          right: {
            title: "MATCH",
            style: {
              label: {
                color: "#4DED30",
              }
            }
          }
        }}
        cards={mockUserCardData}
        renderCard={(cardData) => cardData ? (
          <Card
            key={cardData.id}
            data={cardData}
          />
        ) : (
          <EmptyCard/>
        )}
      />
    </View>
  )
};

export default SwipeCard;