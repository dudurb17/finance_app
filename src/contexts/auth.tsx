import { createContext, useContext, useState } from 'react';
import { User } from '@/types/user';

export const AuthContext = createContext<{
  user: User;
  setUser: (user: User) => void;
}>({
  user: { name: '' },
  setUser: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: 'Eduardo',
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
