import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Mon", sales: 4000, topSeller: 3200 },
  { date: "Tue", sales: 3000, topSeller: 2800 },
  { date: "Wed", sales: 5000, topSeller: 4600 },
  { date: "Thu", sales: 2780, topSeller: 2400 },
  { date: "Fri", sales: 4890, topSeller: 3800 },
  { date: "Sat", sales: 3390, topSeller: 3000 },
  { date: "Sun", sales: 2390, topSeller: 2100 },
];

export function SalesTrendChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} />
          <Line type="monotone" dataKey="topSeller" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}