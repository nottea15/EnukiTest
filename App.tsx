import {MainNavigator} from '@navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
