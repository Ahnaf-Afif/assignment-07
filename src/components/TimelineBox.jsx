"use client";

import { useContext } from "react";
import { Message_data } from "@/context/context";

export default function page() {
  const { message, setMessage } = useContext(Message_data);

  return (
    <div>
      <h1>Timeline</h1>
      <p>{message.name}</p>
    </div>
  );
}
