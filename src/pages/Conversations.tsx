import { ConversationList } from "@/components/ConversationList";
import { PendingInquiries } from "@/components/PendingInquiries";

const Conversations = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Conversations</h1>
        <p className="text-muted-foreground">
          Manage and respond to patient inquiries
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Conversations</h2>
            <ConversationList />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pending Inquiries</h2>
            <PendingInquiries />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;