import React from 'react';

import PublicRoutes from './public/routes';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Routes() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <View /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
