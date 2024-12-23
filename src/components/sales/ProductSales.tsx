import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { category: "Prescription", revenue: 4000 },
  { category: "OTC", revenue: 3000 },
  { category: "Care Products", revenue: 2000 },
  { category: "Medical Devices", revenue: 2780 },
  { category: "Supplements", revenue: 1890 },
];

export function ProductSales() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Product Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}