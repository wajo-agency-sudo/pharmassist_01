import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  MessageCircle,
  Clock,
  ArrowUpCircle,
  CheckCircle,
  History,
  MessageSquare,
  Flag,
} from "lucide-react";
import { Conversation } from "@/types/conversation";

interface ConversationCardProps {
  conversation: Conversation;
  notes: Record<string, string>;
  setNotes: (notes: Record<string, string>) => void;
  selectedConversation: string | null;
  setSelectedConversation: (id: string | null) => void;
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
}

export function ConversationCard({
  conversation,
  notes,
  setNotes,
  selectedConversation,
  setSelectedConversation,
  setConversations,
}: ConversationCardProps) {
  const { toast } = useToast();

  const handleAddNote = (conversationId: string) => {
    if (notes[conversationId]?.trim()) {
      toast({
        title: "Note saved",
        description: "Your note has been saved successfully.",
      });
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        return <MessageCircle className="h-4 w-4" />;
      case "chatbot":
        return <MessageSquare className="h-4 w-4" />;
      case "social":
        return <History className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg border p-4 space-y-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getChannelIcon(conversation.channel)}
          <span className="font-medium">{conversation.patient}</span>
          <Badge variant={getPriorityColor(conversation.priority)}>
            {conversation.priority}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">
            {conversation.timeInQueue}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Badge variant="outline">{conversation.reason}</Badge>
        <p className="text-sm text-muted-foreground">{conversation.lastMessage}</p>
      </div>

      {selectedConversation === conversation.id && (
        <div className="space-y-4 pt-4 border-t">
          {conversation.history && (
            <div className="space-y-2">
              <h4 className="font-medium">History</h4>
              <ul className="text-sm space-y-1">
                {conversation.history.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <History className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="space-y-2">
            <h4 className="font-medium">Notes</h4>
            <Textarea
              placeholder="Add a note..."
              value={notes[conversation.id] || ""}
              onChange={(e) =>
                setNotes((prev) => ({
                  ...prev,
                  [conversation.id]: e.target.value,
                }))
              }
            />
            <Button size="sm" onClick={() => handleAddNote(conversation.id)}>
              Save Note
            </Button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setSelectedConversation(
              selectedConversation === conversation.id ? null : conversation.id
            )
          }
        >
          {selectedConversation === conversation.id ? "Hide Details" : "View Details"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast({
              title: "Conversation flagged",
              description: "The conversation has been flagged for follow-up.",
            })
          }
        >
          <Flag className="h-4 w-4 mr-2" />
          Flag
        </Button>
        {conversation.status === "pending" && (
          <Button
            variant="default"
            size="sm"
            onClick={() =>
              setConversations((prev) =>
                prev.map((conv) =>
                  conv.id === conversation.id
                    ? { ...conv, status: "in-progress" }
                    : conv
                )
              )
            }
          >
            <ArrowUpCircle className="h-4 w-4 mr-2" />
            Take Action
          </Button>
        )}
        {conversation.status === "in-progress" && (
          <Button
            variant="default"
            size="sm"
            onClick={() =>
              setConversations((prev) =>
                prev.map((conv) =>
                  conv.id === conversation.id
                    ? { ...conv, status: "resolved" }
                    : conv
                )
              )
            }
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Mark Resolved
          </Button>
        )}
      </div>
    </div>
  );
}