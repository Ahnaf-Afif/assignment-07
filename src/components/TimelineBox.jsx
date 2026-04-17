"use client";

import { Phone } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Video } from "lucide-react";

import { useContext, useState } from "react";
import { Message_data } from "@/context/context";

export default function TimelineBox() {
  const { message } = useContext(Message_data);
  const [filter, setFilter] = useState("default");

  const today = new Date();

  return (
    <div>
      <h1 className="mt-5 text-3xl font-bold text-center mb-3">Timeline</h1>
      <div className="join flex justify-center">
        <div></div>
        <select
          className="select join-item"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="default">All</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
          <option value="Video">Video</option>
        </select>

        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>

      {[...message].reverse().map((item, index) =>
        filter === "default" || filter === item.type ? (
          <div
            key={index}
            className="card w-full max-w-11/12 mx-auto my-6 bg-base-100 card-xs shadow-sm"
          >
            <div className="card-body">
              <h2 className="flex flex-row gap-2 items-center">
                {item.type === "Call" ? (
                  <Phone />
                ) : item.type === "Text" ? (
                  <MessageSquare />
                ) : item.type === "Video" ? (
                  <Video />
                ) : null}
                <span className="text-xl font-bold opacity-85">
                  {item.type}
                </span>
                <span className="text-sm opacity-80">with {item.name}</span>
              </h2>
              <div className="ml-9">
                {today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}
              </div>
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
}
