import { localStorage } from "../../utils/localStorage";
const DEVICE_TOKEN_KEY = "ihome@DEVICE_TOKEN_KEY";

export const saveToken = (token: string) => {
  localStorage.set(DEVICE_TOKEN_KEY, token);
};

export const getToken = () => localStorage.get(DEVICE_TOKEN_KEY);
