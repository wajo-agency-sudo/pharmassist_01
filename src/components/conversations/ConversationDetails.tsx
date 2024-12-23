import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Bot } from "lucide-react";

interface Message {
  sender: "ai" | "patient";
  content: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  patient: string;
  messages: Message[];
}

interface ConversationDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversation: Conversation | null;
}

export function ConversationDetails({
  open,
  onOpenChange,
  conversation,
}: ConversationDetailsProps) {
  if (!conversation) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Conversation with {conversation.patient}</DialogTitle>
          <DialogDescription>
            Full conversation history
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {conversation.messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.sender === "patient" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    message.sender === "patient"
                      ? "bg-secondary"
                      : "bg-primary/10"
                  }`}
                >
                  {message.sender === "patient" ? (
                    <MessageCircle className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`flex max-w-[80%] flex-col gap-1 rounded-lg p-3 ${
                    message.sender === "patient"
                      ? "bg-secondary"
                      : "bg-primary/10"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}