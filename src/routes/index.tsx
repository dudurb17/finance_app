import React from 'react';

import PublicRoutes from './public/routes';
import { NavigationContainer } from '@react-navigation/native';
import PrivateRoutes from './private/routes';
import { useAuth } from '@/contexts/auth';
import Splash from '@/pages/Splash';

export default function Routes() {
  const { signed, isStarting } = useAuth();
  if (isStarting) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {signed ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
