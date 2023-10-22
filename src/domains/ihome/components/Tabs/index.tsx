import cx from "clsx";
import React from "react";
import {
  HomeIcon,
  FreeConsultationIcon,
  RequestConsultationIcon,
  ChattingIcon,
  AccountIcon,
} from "./Icons";
import { useRouter } from "next/router";
import { IHOME_TABS, IhomeTab, useIHomeStore } from "../../stores/ihome";

const TAB_LIST = [
  {
    label: "홈",
    Icon: HomeIcon,
    key: IHOME_TABS.HOME,
    index: 0,
  },
  {
    label: "무료상담",
    Icon: FreeConsultationIcon,
    key: IHOME_TABS.FREE_CONSULTATION,
    index: 1,
  },
  {
    label: "홈티신청",
    Icon: RequestConsultationIcon,
    key: IHOME_TABS.REQUEST_CONSULTATION,
    index: 2,
  },
  {
    label: "알림",
    Icon: ChattingIcon,
    key: IHOME_TABS.CHATTING,
    index: 3,
  },
  {
    label: "계정",
    Icon: AccountIcon,
    key: IHOME_TABS.ACCOUNT,
    index: 4,
  },
];

export const Tabs = () => {
  const { tab } = useIHomeStore();
  const router = useRouter();
  const handleClickTab = (tab: IhomeTab) => {
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        tab,
      },
    });
  };

  return (
    <div className="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div
        className={cx(
          "grid h-full max-w-lg mx-auto",
          `grid-cols-${TAB_LIST.length}`
        )}
      >
        {TAB_LIST.map(({ label, Icon, key }) => (
          <button
            key={key}
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={() => handleClickTab(key)}
          >
            <Icon
              className={cx(
                "w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                {
                  "text-blue-500": tab === key,
                  "dark:text-blue-400": tab === key,
                }
              )}
            />
            <span
              className={cx(
                "text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                {
                  "text-blue-500": tab === key,
                  "dark:text-blue-400": tab === key,
                }
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
