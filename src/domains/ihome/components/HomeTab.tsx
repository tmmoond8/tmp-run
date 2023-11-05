import React from "react";
import { FirebaseNotification } from "@/domains/ihome/types";
import { useIHomeStore } from "../stores/ihome";
import { useIHomeNotification } from "../stores/notificationStores";

export const HomeTab = () => {
  const { tab } = useIHomeStore();
  const { notifications, append, remove, check } = useIHomeNotification();
  return (
    <>
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
    </>
  );
};
