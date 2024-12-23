import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Clock } from "lucide-react";

interface Conversation {
  id: string;
  patient: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    patient: "John Doe",
    lastMessage: "I need information about my prescription",
    time: "5m ago",
    unread: true,
  },
  {
    id: "2",
    patient: "Jane Smith",
    lastMessage: "When will my order be ready?",
    time: "1h ago",
    unread: false,
  },
  {
    id: "3",
    patient: "Alice Johnson",
    lastMessage: "Thank you for the information",
    time: "2h ago",
    unread: false,
  },
];

export function ConversationList() {
  return (
    <ScrollArea className="h-[400px] rounded-md border p-4 bg-white">
      <div className="space-y-4">
        {mockConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-secondary cursor-pointer ${
              conversation.unread ? "bg-secondary" : "bg-white"
            }`}
          >
            <div className="relative">
              <MessageCircle className="h-8 w-8 text-primary" />
              {conversation.unread && (
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-success" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-medium leading-none">{conversation.patient}</p>
              <p className="text-sm text-muted-foreground">
                {conversation.lastMessage}
              </p>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {conversation.time}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}