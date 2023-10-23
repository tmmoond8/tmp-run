export interface FirebaseNotification<T = {}> {
  notification: {
    title: string;
    body: string;
  };
  sentTime: string; // Date.now().toString()
  mutableContent: boolean;
  messageId: string;
  from: string;
  data: {
    fcm_options: {
      image: string;
    };
  } & T;
  shown?: boolean;
}

export type PostMessage = DeviceTokenPostMessage | NotificationPostMessage<any>;

export interface DeviceTokenPostMessage {
  type: "deviceToken";
  data: string;
}

export interface NotificationPostMessage<T> {
  type: "notification";
  data: FirebaseNotification<T>;
}
