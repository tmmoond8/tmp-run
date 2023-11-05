import BaseLayout from "../../domains/ihome/components/BaseLayout";
import { useNotificationInitialization } from "../../domains/ihome/hooks/useNotificationHandler";
import {
  IHOME_TABS,
  IhomeTab,
  useIHomeStore,
} from "../../domains/ihome/stores/ihome";
import { useIHomeNotification } from "../../domains/ihome/stores/notificationStores";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { ChattingTab } from "@/domains/ihome/components/ChattingTab";
import { DefaultTab } from "@/domains/ihome/components/DefaultTab";
import { HomeTab } from "@/domains/ihome/components/HomeTab";
import { RequestConsultation } from "@/domains/ihome/components/RequestConsultation";

export default function Ihome() {
  const query = useRouter().query as { tab?: IhomeTab };
  const { tab, setTab } = useIHomeStore();
  useNotificationInitialization();

  React.useEffect(() => {
    setTab(
      query.tab && Object.keys(IHOME_TABS).includes(query.tab)
        ? query.tab
        : IHOME_TABS.HOME
    );
  }, [setTab, query.tab]);

  const tabContent = React.useMemo(() => {
    switch (tab) {
      case IHOME_TABS.CHATTING: {
        return <ChattingTab />;
      }
      case IHOME_TABS.HOME: {
        return <HomeTab />;
      }
      case IHOME_TABS.REQUEST_CONSULTATION: {
        return <RequestConsultation />;
      }
      default: {
        return <DefaultTab />;
      }
    }
  }, [tab]);

  return <BaseLayout>{tabContent}</BaseLayout>;
}
