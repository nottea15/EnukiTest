import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/HomeScreen';
import {ItemDetailsScreen} from '@screens/ItemDetailsScreen';
import {IITem} from '@utils/types/Item';
import React from 'react';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  ItemDetails: {item: IITem};
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: "Search"}}/>
      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
};
