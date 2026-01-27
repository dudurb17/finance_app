import { createContext, useContext, useEffect, useState } from 'react';
import { User, UserData } from '@/types/user';
import api from '@/services/api';

import Keychain, { UserCredentials } from 'react-native-keychain';
import { API_URL } from '@env';
export const AuthContext = createContext<{
  signed: boolean;
  user: User;
  setUser: (user: User) => void;
  signUp: (user: User) => Promise<void>;
  signIn: (user: UserData) => Promise<void>;
  isStarting: boolean;
  signOut: () => Promise<void>;
}>({
  signed: false,
  user: null,
  setUser: () => {},
  signUp: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  isStarting: true,
  signOut: () => Promise.resolve(),
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    async function getToken() {
      try {
        const credentials = await Keychain.getGenericPassword();
        const { password } = credentials as UserCredentials;
        if (password) {
          const response = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${password}`,
            },
          });
          if (response?.status === 200) {
            setUser({
              id: response?.data?.id,
              email: response?.data?.email,
              name: response?.data?.name,
            });
            api.defaults.headers['Authorization'] = `Bearer ${password}`;
          }
        }
      } catch (error) {
        console.error('error', error);
      } finally {
        setIsStarting(false);
      }
    }

    getToken();
  }, []);

  async function signOut() {
    await Keychain.resetGenericPassword();
    api.defaults.headers['Authorization'] = '';
    setUser(null);
  }

  async function signUp(user: User) {
    try {
      const response = await api.post('/users', user);
      console.log('response', response);
      console.log('response', response);
    } catch (error) {
      console.error('error', error);
    }
  }

  async function signIn(user: UserData) {
    try {
      const response = await api.post('/login', user);
      if (response?.status === 200) {
        await Keychain.setGenericPassword('token', response?.data?.token);

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
      value={{
        signed: !!user,
        user,
        setUser,
        signUp,
        signIn,
        isStarting,
        signOut,
      }}
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
