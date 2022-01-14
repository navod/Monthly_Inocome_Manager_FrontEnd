import React from 'react';
import {
  Book,
  Food,
  Fee,
  Games,
  Sports,
  Travel,
  Gifts,
  Bike,
  Shopping,
} from './Icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const RenderIcons = ({type}) => {
  switch (type) {
    case Food:
      return <Ionicons color={'white'} name="fast-food-outline" size={30} />;

    case Book:
      return <Ionicons color={'white'} name="book-outline" size={30} />;

    case Fee:
      return <MaterialIcons color={'white'} name="attach-money" size={30} />;

    case Games:
      return (
        <Ionicons color={'white'} name="md-game-controller-outline" size={30} />
      );

    case Sports:
      return (
        <MaterialIcons color={'white'} name="sports-basketball" size={30} />
      );

    case Gifts:
      return <Ionicons color={'white'} name="gift" size={30} />;

    case Bike:
      return (
        <MaterialCommunityIcons color={'white'} name="motorbike" size={30} />
      );
    case Shopping:
      return <Ionicons color={'white'} name="shirt-outline" size={30} />;

    case Travel:
      return (
        <MaterialCommunityIcons
          color={'white'}
          name="wallet-travel"
          size={30}
        />
      );

    default:
      return null;
  }
};
