import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {Footer, Header, SwipeCard} from "../../components/home-screen";


const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 pt-8">
      <Header/>
      <SwipeCard/>
      <Footer/>
    </SafeAreaView>
  )
};

export default HomeScreen;