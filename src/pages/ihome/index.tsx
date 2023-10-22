import BaseLayout from "@/components/ihome/BaseLayout";
import { IHOME_TABS, IhomeTab, useIHomeStore } from "@/stores/ihome";
import { useRouter } from "next/router";
import React from "react";

export default function Ihome() {
  const { tab } = useRouter().query as { tab?: IhomeTab };
  const { setTab } = useIHomeStore();

  React.useEffect(() => {
    setTab(
      tab && Object.keys(IHOME_TABS).includes(tab) ? tab : IHOME_TABS.HOME
    );
  }, [setTab, tab]);

  return (
    <BaseLayout>
      <div>{tab}</div>
    </BaseLayout>
  );
}
