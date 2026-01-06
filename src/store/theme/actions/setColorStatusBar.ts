import { StateCreator } from 'zustand';

export const setStatusBarColorStyle = (
  set: (partial: { statusBarColorStyle: string }) => void,
  color: string,
) => {
  set({ statusBarColorStyle: color });
};
