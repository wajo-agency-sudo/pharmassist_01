import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import { ConversationCard } from "./ConversationCard";
import { Conversation } from "@/types/conversation";

const mockConversations: Conversation[] = [
  {
    id: "1",
    patient: "John Doe",
    channel: "whatsapp",
    priority: "high",
    reason: "Complex Inquiry",
    timeInQueue: "15m",
    status: "pending",
    lastMessage: "Need clarification about drug interactions",
    history: ["Previous inquiry about allergies", "Regular customer since 2022"],
  },
  {
    id: "2",
    patient: "Jane Smith",
    channel: "chatbot",
    priority: "medium",
    reason: "Patient History",
    timeInQueue: "30m",
    status: "in-progress",
    lastMessage: "Following up on previous prescription",
  },
  {
    id: "3",
    patient: "Alice Johnson",
    channel: "social",
    priority: "high",
    reason: "Human Interaction Required",
    timeInQueue: "5m",
    status: "pending",
    lastMessage: "Urgent question about medication dosage",
  },
];

export function UrgentActions() {
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Urgent Actions</h2>
        <Badge variant="outline" className="flex gap-2">
          <AlertCircle className="h-4 w-4" />
          {conversations.filter((c) => c.status === "pending").length} pending
        </Badge>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        {["pending", "in-progress", "resolved"].map((status) => (
          <TabsContent key={status} value={status}>
            <div className="space-y-4">
              {conversations
                .filter((conv) => conv.status === status)
                .map((conversation) => (
                  <ConversationCard
                    key={conversation.id}
                    conversation={conversation}
                    notes={notes}
                    setNotes={setNotes}
                    selectedConversation={selectedConversation}
                    setSelectedConversation={setSelectedConversation}
                    setConversations={setConversations}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}