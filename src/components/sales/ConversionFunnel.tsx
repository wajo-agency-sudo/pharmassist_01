import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Funnel, FunnelChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { value: 100, name: "Total Conversations", fill: "#0088FE" },
  { value: 60, name: "Product Inquiries", fill: "#00C49F" },
  { value: 30, name: "Sales Conversion", fill: "#FFBB28" },
];

export function ConversionFunnel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Funnel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip />
              <Funnel
                data={data}
                dataKey="value"
                nameKey="name"
                labelLine={true}
              />
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}