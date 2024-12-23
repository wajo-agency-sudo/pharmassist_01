import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Mon", conversations: 4 },
  { date: "Tue", conversations: 7 },
  { date: "Wed", conversations: 5 },
  { date: "Thu", conversations: 6 },
  { date: "Fri", conversations: 8 },
  { date: "Sat", conversations: 3 },
  { date: "Sun", conversations: 2 },
];

export function MetricsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
          <Tooltip />
          <Line type="monotone" dataKey="conversations" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}