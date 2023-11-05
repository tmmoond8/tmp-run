import React from "react";
import { NotificationList } from "./NotificationList";

export const ChattingTab = () => {
  return (
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
  );
};
