import { create } from 'zustand';

export const useStore = create((set) => ({
  userLogin: null,
  setUserLogin: (userLoginData:string) => set({ userLogin: userLoginData }),
  setLogout: () => set({ userLogin: null }),
}));
