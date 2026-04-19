"use client";

import { useContext } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { Message_data } from "@/context/context";

export default function StatsPage() {
  const { message } = useContext(Message_data);

  const data = [
    {
      name: "Text",
      value: message.filter((item) => item.type === "Text").length,
      fill: "#22c55e",
    },
    {
      name: "Call",
      value: message.filter((item) => item.type === "Call").length,
      fill: "#3b82f6",
    },
    {
      name: "Video",
      value: message.filter((item) => item.type === "Video").length,
      fill: "#f97316",
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="mx-auto w-11/12 max-w-5xl py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-slate-800">
          Stats
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[320px_minmax(0,1fr)] md:items-center">
          <div className="mx-auto">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={55}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Total Interactions</p>
              <p className="text-3xl font-bold text-slate-800">{total}</p>
            </div>

            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="font-medium text-slate-700">{item.name}</span>
                </div>
                <span className="text-xl font-bold text-slate-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
