import React from "react";
import { FirebaseNotification } from "../ types";

interface NotificationListProps {
  data: FirebaseNotification[];
}

export const NotificationList = ({ data }: NotificationListProps) => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 my-4">
      {data.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span>No Data</span>
        </div>
      )}
      {data.map((notification) => (
        <li className="pb-3 sm:pb-4 px-4" key={notification.messageId}>
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
                Neil Sims
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                email@flowbite.com
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
