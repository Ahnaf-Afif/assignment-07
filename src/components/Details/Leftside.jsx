"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Message_data } from "@/context/context";

import React from "react";
import {
  Archive,
  BellOff,
  Phone,
  MessageSquare,
  Trash2,
  Video,
  Pencil,
} from "lucide-react";

const formatStatus = (status) => {
  if (status === "On Track") return "On-Track";
  return status;
};

const statusClasses = {
  Overdue: "bg-[#FF4D4F] text-white",
  "Almost Due": "bg-[#F6B94C] text-white",
  "On Track": "bg-[#244D3F] text-white",
  "Need Attention": "bg-[#FF4D4F] text-white",
};

const quickActions = [
  { icon: Phone, label: "Call" },
  { icon: MessageSquare, label: "Text" },
  { icon: Video, label: "Video" },
];

function SideButton({ icon: Icon, label, danger = false }) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition
        ${
          danger
            ? "border-red-200 text-red-500 hover:bg-red-50"
            : "border-slate-200 text-slate-600 hover:bg-slate-50"
        }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

export default function Leftside({ friend }) {
  const { tags = [], daysSinceContact } = friend;
  const { setMessage } = useContext(Message_data);
  const router = useRouter();

  function sendData() {
    setMessage({
      name: friend.name,
      type: "Text",
      contact: friend.quickCheckIn?.text,
    });
  }

  const stats = [
    { value: friend.daysSinceContact, label: "Days Since Contact" },
    { value: friend.goalDays, label: "Goal (Days)" },
    { value: friend.nextDueDate, label: "Next Due" },
  ];

  return (
    <section className="w-full bg-[#f6f8fa] p-6 md:p-8">
      <div className="mx-auto max-w-10/12">
        <div className="grid gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div>
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="mb-3 h-[80px] w-[80px] rounded-full object-cover"
                  />
                </div>

                <h2 className="text-lg font-semibold text-slate-800">
                  {friend.name}
                </h2>

                <div className="mt-3 flex flex-col gap-3 flex-wrap items-center justify-center gap-2">
                  <div
                    className={` rounded-full px-2 py-[3px] text-[9px] font-medium leading-[14px] ${
                      statusClasses[friend.status] ||
                      "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {formatStatus(friend.status)}
                  </div>
                  <div className=" flex flex-wrap items-center justify-center gap-1">
                    {tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#DCFCE7] px-2 py-[2px] text-[9px] font-medium uppercase leading-[14px] text-[#5F8F71]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm italic text-slate-500">
                  {friend.notes}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Preferred: {friend.preferredContact}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <SideButton icon={BellOff} label={friend.actions.snoozeDays} />
              <SideButton icon={Archive} label="Archive" />
              <SideButton icon={Trash2} label="Delete" danger />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-bold text-[#2f5f54]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">
                    Relationship Goal
                  </h3>
                  <p className="mt-4 text-sm text-slate-500">
                    {friend.relationshipGoal}
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                  <Pencil className="h-4 w-4" />
                  Edit
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold text-slate-700">
                Quick Check-In
              </h3>

              <div className="grid gap-4 sm:grid-cols-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      onClick={() => sendData()}
                      className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100"
                    >
                      <Icon className="mb-3 h-6 w-6" />
                      <span className="text-sm font-medium">
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
