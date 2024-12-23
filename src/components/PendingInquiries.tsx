import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const inquiries = [
  {
    id: 1,
    patient: "John Doe",
    message: "Question about prescription refill",
    time: "5m ago",
    priority: "urgent",
  },
  {
    id: 2,
    patient: "Jane Smith",
    message: "Side effects inquiry",
    time: "15m ago",
    priority: "medium",
  },
  {
    id: 3,
    patient: "Mike Johnson",
    message: "Medication interaction",
    time: "30m ago",
    priority: "urgent",
  },
];

export function PendingInquiries() {
  return (
    <ScrollArea className="h-[200px] bg-white p-4 rounded-lg border">
      <div className="space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="flex items-start justify-between space-x-4 bg-white p-3 rounded-lg">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{inquiry.patient}</p>
              <p className="text-sm text-muted-foreground">{inquiry.message}</p>
              <p className="text-xs text-muted-foreground">{inquiry.time}</p>
            </div>
            <Badge variant={inquiry.priority === "urgent" ? "destructive" : "secondary"}>
              {inquiry.priority}
            </Badge>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}