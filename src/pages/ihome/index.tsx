import BaseLayout from "@/domains/ihome/components/BaseLayout";
import { NotificationList } from "@/domains/ihome/components/NotificationList";
import {
  IHOME_TABS,
  IhomeTab,
  useIHomeNotification,
  useIHomeStore,
} from "@/domains/ihome/stores/ihome";
import { useRouter } from "next/router";
import React from "react";

export default function Ihome() {
  const query = useRouter().query as { tab?: IhomeTab };
  const { tab, setTab } = useIHomeStore();
  const { notifications } = useIHomeNotification();

  React.useEffect(() => {
    console.log("tab", query.tab);
    setTab(
      query.tab && Object.keys(IHOME_TABS).includes(query.tab)
        ? query.tab
        : IHOME_TABS.HOME
    );
  }, [setTab, query.tab]);

  return (
    <BaseLayout>
      {tab === IHOME_TABS.CHATTING ? (
        <NotificationList data={notifications} />
      ) : (
        <div>{tab}</div>
      )}
    </BaseLayout>
  );
}
