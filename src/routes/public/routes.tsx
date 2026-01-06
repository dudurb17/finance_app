import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '@/pages/SignUp';
import SignIn from '@/pages/SignIn';

const PublicStack = createNativeStackNavigator();

export default function PublicRoutes() {
  return (
    <PublicStack.Navigator initialRouteName="SignIn">
      <PublicStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen name="SignUp" component={SignUp} />
    </PublicStack.Navigator>
  );
}
