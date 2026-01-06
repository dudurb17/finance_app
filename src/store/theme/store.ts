import { create } from 'zustand';
import { setStatusBarColorStyle } from './actions/setColorStatusBar';

interface ThemeState {
  statusBarColorStyle: string;
  setStatusBarColorStyle: (color: string) => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  statusBarColorStyle: '#f0f4ff',
  setStatusBarColorStyle: color => setStatusBarColorStyle(set, color),
}));

export const useStatusBarColorStyle = () => {
  return useThemeStore(state => state.statusBarColorStyle);
};
