import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '@/pages/auth/SignUp';
import SignIn from '@/pages/auth/SignIn';
import { PublicRoutesParams } from './types';

const PublicStack = createNativeStackNavigator<PublicRoutesParams>();

export default function PublicRoutes() {
  return (
    <PublicStack.Navigator initialRouteName="SignIn">
      <PublicStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#87CEEB',
          },
          headerTintColor: '#fff',
          headerTitle: 'Voltar',
        }}
      />
    </PublicStack.Navigator>
  );
}
