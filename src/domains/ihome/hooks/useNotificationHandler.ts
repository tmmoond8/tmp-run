import React from "react";
import * as iHomeStorage from "../storage";
import { PostMessage } from "../types";
import { useIHomeNotification } from "../stores/notificationStores";
import { useRouter } from "next/router";

export const useNotificationInitialization = () => {
  const { notifications, append } = useIHomeNotification();
  const router = useRouter();
  React.useEffect(() => {
    const handleReceiveMessage = (event: MessageEvent<PostMessage>) => {
      const message = getMessage(event);
      if (!message) {
        return;
      }

      const { type, data } = message;

      switch (type) {
        case "deviceToken": {
          // TODO 토큰 서버에 저장하기
          iHomeStorage.saveToken(data);
          return;
        }
        case "notification": {
          append(data);
          return;
        }
        case "open": {
          if (data?.data?.link) {
            router.push(data.data.link);
          }
          return;
        }
      }
    };
    if (window) {
      window.addEventListener("message", handleReceiveMessage);
      window.addEventListener("test-message" as any, handleReceiveMessage);
      (document as any).addEventListener("message", handleReceiveMessage);
    }
    return () => {
      window.removeEventListener("message", handleReceiveMessage);
      window.removeEventListener("test-message" as any, handleReceiveMessage);
      (document as any).removeEventListener("message", handleReceiveMessage);
    };
  }, []);
};

function getMessage(event: MessageEvent<PostMessage>) {
  if (globalThis.location.host.includes("localhost")) {
    return;
  }

  if ("detail" in event) {
    return event.detail as PostMessage;
  }

  const message =
    typeof event.data === "string" ? JSON.parse(event.data) : event.data ?? {};
  if (!message?.type || !message?.data) {
    return;
  }

  return message as PostMessage;
}
