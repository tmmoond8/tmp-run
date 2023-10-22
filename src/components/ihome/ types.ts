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
}
