import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Header from "../../components/home-screen/Header";
import SwipeCard from "../../components/home-screen/SwipeCard";


const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 pt-8">
      <Header/>
      <SwipeCard/>
    </SafeAreaView>
  )
};

export default HomeScreen;