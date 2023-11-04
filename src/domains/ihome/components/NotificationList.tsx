import React from "react";
import cx from "clsx";
import { useIHomeNotification } from "../stores/notificationStores";
import { useRouter } from "next/router";

export const NotificationList = () => {
  const router = useRouter();
  const { notifications, append, remove, check } = useIHomeNotification();
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {notifications.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span>No Data</span>
        </div>
      )}
      {notifications.map((notification) => (
        <li
          className={cx("py-3 sm:py-4 px-4", {
            "bg-gray-800": !notification.shown,
          })}
          key={notification.messageId}
          onClick={() => {
            check(notification);
            if ("link" in notification.data) {
              router.push(notification.data.link as string);
            }
          }}
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={notification.data?.fcm_options?.image}
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {notification.notification.title}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {notification.notification.body}
              </p>
            </div>
            <button
              className="text-red-400 p-2"
              onClick={() => remove(notification)}
            >
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
