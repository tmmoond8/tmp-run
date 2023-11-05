import { create } from "zustand";

export const IHOME_TABS = {
  HOME: "HOME",
  FREE_CONSULTATION: "FREE_CONSULTATION",
  REQUEST_CONSULTATION: "REQUEST_CONSULTATION",
  CHATTING: "CHATTING",
  ACCOUNT: "ACCOUNT",
} as const;

export interface TabContext {
  currentTabIndex: number;
  prevTabIndex?: number;
  prevTab?: IhomeTab;
}

const IHOME_TAB_INDEX = Object.keys(IHOME_TABS).reduce((acc, key, index) => {
  acc[key as keyof typeof IHOME_TABS] = index;
  return acc;
}, {} as Record<keyof typeof IHOME_TABS, number>);

export type IhomeTab = keyof typeof IHOME_TABS;

interface IHomeState {
  tab: IhomeTab;
  tabContext: TabContext;
  setTab: (tab: IhomeTab) => void;
}

export const useIHomeStore = create<IHomeState>((set, get) => ({
  tab: IHOME_TABS.HOME,
  tabContext: {
    currentTabIndex: IHOME_TAB_INDEX[IHOME_TABS.HOME],
  },
  setTab: (tab: IhomeTab) => {
    const { tab: prevTab } = get();
    set({
      tab,
      tabContext: {
        currentTabIndex: IHOME_TAB_INDEX[tab],
        prevTab,
        prevTabIndex: IHOME_TAB_INDEX[prevTab],
      },
    });
  },
}));
