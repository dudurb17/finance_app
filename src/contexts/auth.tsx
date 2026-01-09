import { createContext, useContext, useState } from 'react';
import { User } from '@/types/user';
import api from '@/services/api';
import { useNavigation } from '@react-navigation/native';
import { PublicRoutesNavigationProp } from '@/routes/public/types';

export const AuthContext = createContext<{
  user: User;
  setUser: (user: User) => void;
  signUp: (user: User) => Promise<void>;
}>({
  user: null,
  setUser: () => {},
  signUp: () => Promise.resolve(),
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  async function signUp(user: User) {
    try {
      const response = await api.post('/users', user);
      console.log('response', response);
    } catch (error) {
      console.error('error', error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
