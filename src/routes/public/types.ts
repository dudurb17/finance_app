import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PublicRoutesParams = {
  SignIn: undefined;
  SignUp: undefined;
};

export type PublicRoutesNavigationProp =
  NativeStackNavigationProp<PublicRoutesParams>;
