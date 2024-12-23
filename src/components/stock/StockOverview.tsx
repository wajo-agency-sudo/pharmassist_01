import { PieChart, ResponsiveContainer, Pie, Cell, Tooltip } from "recharts";
import { AlertCircle, ArrowDown, ArrowUp, CheckCircle } from "lucide-react";

const data = [
  { name: "High Stock", value: 40, status: "high" },
  { name: "Medium Stock", value: 30, status: "medium" },
  { name: "Low Stock", value: 20, status: "low" },
  { name: "Critical Stock", value: 10, status: "critical" },
];

const COLORS = {
  high: "#10b981",
  medium: "#2563eb",
  low: "#f59e0b",
  critical: "#ef4444",
};

const StockIndicator = ({ status }: { status: string }) => {
  const icons = {
    high: <ArrowUp className="h-4 w-4 text-success" />,
    medium: <CheckCircle className="h-4 w-4 text-primary" />,
    low: <ArrowDown className="h-4 w-4 text-warning" />,
    critical: <AlertCircle className="h-4 w-4 text-destructive" />,
  };

  return icons[status as keyof typeof icons] || null;
};

export function StockOverview() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.status as keyof typeof COLORS]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <StockIndicator status={item.status} />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}