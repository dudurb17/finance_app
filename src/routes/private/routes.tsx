import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrivateRoutesParams } from './types';
import Home from '@/pages/Home';
const Drawer = createDrawerNavigator<PrivateRoutesParams>();

export default function PrivateRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
