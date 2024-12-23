import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock } from "lucide-react";

interface PatientHistoryProps {
  patientId: string;
}

const mockHistory = [
  {
    id: "1",
    message: "Inquired about prescription refill",
    timestamp: "2024-02-20 14:30",
    type: "inquiry",
    channel: "whatsapp",
  },
  {
    id: "2",
    message: "Discussed medication side effects",
    timestamp: "2024-02-19 11:15",
    type: "consultation",
    channel: "in-person",
  },
  {
    id: "3",
    message: "Requested appointment reschedule",
    timestamp: "2024-02-18 09:45",
    type: "appointment",
    channel: "email",
  },
];

export function PatientHistory({ patientId }: PatientHistoryProps) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="text-lg font-semibold mb-4">Conversation History</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-4">
          {mockHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between space-x-4 p-3 rounded-lg border"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <p className="text-sm font-medium">{item.message}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline">{item.type}</Badge>
                <Badge variant="secondary">{item.channel}</Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}