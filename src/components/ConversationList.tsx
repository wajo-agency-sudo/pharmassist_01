import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Clock } from "lucide-react";
import { ConversationDetails } from "@/components/conversations/ConversationDetails";

interface Message {
  sender: "ai" | "patient";
  content: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  patient: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  messages: Message[];
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    patient: "John Doe",
    lastMessage: "I need information about my prescription",
    time: "5m ago",
    unread: true,
    messages: [
      {
        sender: "patient",
        content: "Hello, I need information about my prescription",
        timestamp: "10:30 AM",
      },
      {
        sender: "ai",
        content: "Of course! I'd be happy to help. Could you please specify which prescription you're inquiring about?",
        timestamp: "10:31 AM",
      },
      {
        sender: "patient",
        content: "It's the blood pressure medication",
        timestamp: "10:32 AM",
      },
      {
        sender: "ai",
        content: "I see. Your blood pressure medication should be taken twice daily with food. Is there anything specific you'd like to know about it?",
        timestamp: "10:33 AM",
      },
    ],
  },
  {
    id: "2",
    patient: "Jane Smith",
    lastMessage: "When will my order be ready?",
    time: "1h ago",
    unread: false,
    messages: [
      {
        sender: "patient",
        content: "When will my order be ready?",
        timestamp: "9:45 AM",
      },
      {
        sender: "ai",
        content: "Let me check that for you. Your order will be ready for pickup today at 2 PM.",
        timestamp: "9:46 AM",
      },
    ],
  },
  {
    id: "3",
    patient: "Alice Johnson",
    lastMessage: "Thank you for the information",
    time: "2h ago",
    unread: false,
    messages: [
      {
        sender: "patient",
        content: "Thank you for the information",
        timestamp: "8:30 AM",
      },
      {
        sender: "ai",
        content: "You're welcome! Let us know if you need anything else.",
        timestamp: "8:31 AM",
      },
    ],
  },
];

export function ConversationList() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleConversationClick = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    setDialogOpen(true);
  };

  return (
    <>
      <ScrollArea className="h-[400px] rounded-md border p-4 bg-white">
        <div className="space-y-4">
          {mockConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-secondary cursor-pointer ${
                conversation.unread ? "bg-secondary" : "bg-white"
              }`}
              onClick={() => handleConversationClick(conversation)}
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
      <ConversationDetails
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        conversation={selectedConversation}
      />
    </>
  );
}