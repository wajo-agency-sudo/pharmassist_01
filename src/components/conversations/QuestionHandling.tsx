import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockData = [
  {
    channel: "WhatsApp",
    handled: 85,
    open: 15,
  },
  {
    channel: "Email",
    handled: 70,
    open: 30,
  },
  {
    channel: "Instagram",
    handled: 60,
    open: 40,
  },
];

interface QuestionHandlingProps {
  channel?: string;
}

export function QuestionHandling({ channel = "all" }: QuestionHandlingProps) {
  const getFilteredData = () => {
    if (channel === "all") return mockData;
    return mockData.filter(item => 
      item.channel.toLowerCase() === channel.toLowerCase()
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getFilteredData()}>
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="handled" stackId="a" fill="#22c55e" name="Handled" />
            <Bar dataKey="open" stackId="a" fill="#ef4444" name="Open" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}