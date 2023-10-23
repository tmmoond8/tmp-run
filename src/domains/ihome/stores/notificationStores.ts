import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { FirebaseNotification } from "../ types";

export interface IHomeNotificationState {
  notifications: FirebaseNotification[];
  append: (notification: FirebaseNotification) => void;
  remove: (notification: FirebaseNotification) => void;
  check: (notification: FirebaseNotification) => void;
}

export const useIHomeNotification = create(
  persist<IHomeNotificationState>(
    (set, get) => ({
      notifications: [],
      append: (notification: FirebaseNotification) => {
        const { notifications } = get();
        set({ notifications: [notification, ...notifications] });
      },
      remove: (Notification: FirebaseNotification) => {
        const { notifications } = get();
        set({
          notifications: notifications.filter(
            ({ messageId }) => Notification.messageId !== messageId
          ),
        });
      },
      check: (notification: FirebaseNotification) => {
        const { notifications } = get();
        set({
          notifications: notifications.map((item) =>
            item.messageId !== notification.messageId
              ? item
              : { ...item, shown: true }
          ),
        });
      },
    }),
    {
      name: "firebase-notifications",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
