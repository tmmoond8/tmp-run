import { FirebaseNotification } from "@/domains/ihome/types";
import BaseLayout from "../../domains/ihome/components/BaseLayout";
import { NotificationList } from "../../domains/ihome/components/NotificationList";
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

export default function Ihome() {
  const query = useRouter().query as { tab?: IhomeTab };
  const { tab, setTab } = useIHomeStore();
  useNotificationInitialization();
  const { notifications, append, remove, check } = useIHomeNotification();

  React.useEffect(() => {
    setTab(
      query.tab && Object.keys(IHOME_TABS).includes(query.tab)
        ? query.tab
        : IHOME_TABS.HOME
    );
  }, [setTab, query.tab]);

  return (
    <BaseLayout>
      {tab === IHOME_TABS.CHATTING ? (
        <div className="flex flex-col h-full justify-between">
          <NotificationList />
          <ul className="p-4">
            <li>
              <button
                onClick={() => {
                  const customEvent = new CustomEvent("test-message", {
                    detail: {
                      type: "open",
                      data: {
                        data: {
                          link: "/ihome?tab=FREE_CONSULTATION",
                        },
                      },
                    },
                  } as any);
                  window.dispatchEvent(customEvent);
                }}
              >
                open link
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          {tab}
          <div />
          <button
            onClick={() => {
              const noti: FirebaseNotification = {
                notification: {
                  title: "제목",
                  body: "asdfdfdfsf",
                },
                sentTime: Date.now().toString(),
                mutableContent: false,
                messageId: Date.now().toString(),
                from: "23132133213",
                data: {
                  fcm_options: {
                    image:
                      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644116382/noticon/wt7qidjg18y3wyfnijfa.png",
                  },
                },
              };
              append(noti);
            }}
          >
            append
          </button>
          <div />
          <button
            onClick={() => {
              if (notifications.length > 0) {
                remove(notifications[0]);
              }
            }}
          >
            remove
          </button>
          <div />
          <button
            onClick={() => {
              if (notifications.length > 0) {
                check(notifications[0]);
              }
            }}
          >
            check
          </button>
        </div>
      )}
      <button
        onClick={() => {
          console.log("ddd");
        }}
      >
        post message sample
      </button>
      <div>
        <Link href="/ihome/post" passHref>
          LINK POST
        </Link>
      </div>
    </BaseLayout>
  );
}
