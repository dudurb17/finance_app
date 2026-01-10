import { createContext, useContext, useState } from 'react';
import { User, UserData } from '@/types/user';
import api from '@/services/api';

export const AuthContext = createContext<{
  signed: boolean;
  user: User;
  setUser: (user: User) => void;
  signUp: (user: User) => Promise<void>;
  signIn: (user: UserData) => Promise<void>;
}>({
  signed: false,
  user: null,
  setUser: () => {},
  signUp: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
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

  async function signIn(user: UserData) {
    try {
      const response = await api.post('/login', user);
      if (response?.status === 200) {
        api.defaults.headers['Authorization'] =
          `Bearer ${response?.data?.token}`;
        setUser({
          id: response?.data?.id,
          email: user?.email,
          token: response?.data?.token,
          name: response?.data?.name,
        });
      }
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, setUser, signUp, signIn }}
    >
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
