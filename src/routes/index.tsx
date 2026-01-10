import React from 'react';

import PublicRoutes from './public/routes';
import { NavigationContainer } from '@react-navigation/native';
import PrivateRoutes from './private/routes';
import { useAuth } from '@/contexts/auth';

export default function Routes() {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
