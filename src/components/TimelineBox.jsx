"use client";

import { useContext } from "react";
import { Message_data } from "@/context/context";

export default function TimelineBox() {
  const { message } = useContext(Message_data);

  return (
    <div>
      <h1>Timeline</h1>
      <p>Name: {message.name}</p>
      <p>Type: {message.type}</p>
      <p>Contact: {message.contact}</p>
    </div>
  );
}
