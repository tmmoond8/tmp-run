import { create } from "zustand";

export const IHOME_TABS = {
  HOME: "HOME",
  FREE_CONSULTATION: "FREE_CONSULTATION",
  REQUEST_CONSULTATION: "REQUEST_CONSULTATION",
  CHATTING: "CHATTING",
  ACCOUNT: "ACCOUNT",
} as const;

export type IhomeTab = keyof typeof IHOME_TABS;

interface IHomeState {
  tab: IhomeTab;
  setTab: (tab: IhomeTab) => void;
}

export const useIHomeStore = create<IHomeState>((set, get) => ({
  tab: IHOME_TABS.HOME,
  setTab: (tab: IhomeTab) => {
    set({ tab });
  },
}));