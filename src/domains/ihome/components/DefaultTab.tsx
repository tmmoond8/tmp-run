import React from "react";
import { useIHomeStore } from "../stores/ihome";

export const DefaultTab = () => {
  const { tab } = useIHomeStore();
  return <div>{tab}</div>;
};
