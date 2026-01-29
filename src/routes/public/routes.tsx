import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '@/pages/auth/SignUp';
import SignIn from '@/pages/auth/SignIn';
import { PublicRoutesParams } from './types';

const PublicStack = createNativeStackNavigator<PublicRoutesParams>();

export default function PublicRoutes() {
  return (
    <PublicStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <PublicStack.Screen name="SignIn" component={SignIn} />
      <PublicStack.Screen name="SignUp" component={SignUp} />
    </PublicStack.Navigator>
  );
}
