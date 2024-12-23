import { UrgentActions } from "@/components/conversations/UrgentActions";

const UrgentActionsPage = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Urgent Actions</h1>
        <p className="text-muted-foreground">
          Manage and respond to urgent patient inquiries
        </p>
      </div>
      <UrgentActions />
    </div>
  );
};

export default UrgentActionsPage;