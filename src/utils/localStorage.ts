const storage = globalThis.localStorage;

export const localStorage = {
  set(key: string, value: any) {
    if (!storage) {
      return console.log("No Storage");
    }
    storage.setItem(key, value.toString());
  },
  get(key: string) {
    if (!storage) {
      return console.log("No Storage");
    }
    const data = storage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error("parse error", error);
        return data;
      }
    }

    return;
  },
  remove(key: string) {
    if (!storage) {
      return console.log("No Storage");
    }
    return storage.removeItem(key);
  },
} as const;
