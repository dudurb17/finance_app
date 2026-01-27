import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PrivateRoutesParams = {
  Home: undefined;
  NewRegistration: undefined;
};

export type PrivateRoutesNavigationProp =
  NativeStackNavigationProp<PrivateRoutesParams>;
