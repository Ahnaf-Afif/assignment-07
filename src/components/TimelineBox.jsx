"use client";

import { useContext } from "react";
import { Message_data } from "@/context/context";

export default function TimelineBox() {
  const { message } = useContext(Message_data);

  return (
    <div>
      <h1>Timeline</h1>
      {message.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Type: {item.type}</p>
          <p>Contact: {item.contact}</p>
        </div>
      ))}
    </div>
  );
}
