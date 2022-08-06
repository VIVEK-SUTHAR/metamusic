import create from "zustand";

const useStore = create((set) => ({
  currentAccount: "all",
  song: "https://i.scdn.co/image/ab67616d0000485160ec4df52c2d724bc53ffec5",
  allsong: [],
  setSong: (value) => set({ song: value }),
  setAllsong: (value) => set({ allsong: value }),
  setCurrentAccount: (value) => set({ currentAccount: value }),
}));

export default useStore;
