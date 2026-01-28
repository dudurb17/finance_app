import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrivateRoutesParams } from './types';
import Home from '@/pages/Home';
import NewRegistration from '@/pages/NewRegistration';
import Profile from '@/pages/Profile';
import CustomDrawer from '@/components/CustomDrawer';

const Drawer = createDrawerNavigator<PrivateRoutesParams>();

export default function PrivateRoutes() {
  const defaultHeaderStyle = {
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    backgroundColor: '#f3f4f6',
  };
  const headerStyle = {
    headerStyle: defaultHeaderStyle,
    drawerActiveBackgroundColor: '#3b3bdf',
    drawerActiveTintColor: '#FFF',
    drawerInactiveBackgroundColor: '#F0F4FF',
    drawerInactiveTintColor: '#333',
    drawerItemStyle: {
      marginVertical: 5,
    },
  };
  return (
    <Drawer.Navigator screenOptions={headerStyle} drawerContent={CustomDrawer}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="NewRegistration" component={NewRegistration} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
