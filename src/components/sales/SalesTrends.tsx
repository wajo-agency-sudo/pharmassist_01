import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", products: 4000, services: 2400 },
  { month: "Feb", products: 3000, services: 1398 },
  { month: "Mar", products: 2000, services: 9800 },
  { month: "Apr", products: 2780, services: 3908 },
  { month: "May", products: 1890, services: 4800 },
  { month: "Jun", products: 2390, services: 3800 },
];

export function SalesTrends() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Sales Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip />
              <Line type="monotone" dataKey="products" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="services" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}