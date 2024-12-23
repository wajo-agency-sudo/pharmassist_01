import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockData = [
  { date: "Mon", whatsapp: 24, email: 13, instagram: 8 },
  { date: "Tue", whatsapp: 30, email: 15, instagram: 12 },
  { date: "Wed", whatsapp: 28, email: 18, instagram: 10 },
  { date: "Thu", whatsapp: 32, email: 20, instagram: 15 },
  { date: "Fri", whatsapp: 35, email: 22, instagram: 18 },
  { date: "Sat", whatsapp: 20, email: 10, instagram: 8 },
  { date: "Sun", whatsapp: 15, email: 8, instagram: 5 },
];

interface ConversationVolumeProps {
  channel?: string;
}

export function ConversationVolume({ channel = "all" }: ConversationVolumeProps) {
  const getFilteredData = () => {
    if (channel === "all") return mockData;
    
    return mockData.map(item => ({
      date: item.date,
      [channel.toLowerCase()]: item[channel.toLowerCase() as keyof typeof item],
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select defaultValue="week">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Last 24 hours</SelectItem>
            <SelectItem value="week">Last 7 days</SelectItem>
            <SelectItem value="month">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={getFilteredData()}>
            <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            {channel === "all" ? (
              <>
                <Line type="monotone" dataKey="whatsapp" stroke="#25D366" strokeWidth={2} name="WhatsApp" />
                <Line type="monotone" dataKey="email" stroke="#EA4335" strokeWidth={2} name="Email" />
                <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} name="Instagram" />
              </>
            ) : (
              <Line 
                type="monotone" 
                dataKey={channel.toLowerCase()} 
                stroke={channel === "whatsapp" ? "#25D366" : channel === "email" ? "#EA4335" : "#E1306C"} 
                strokeWidth={2} 
                name={channel} 
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}