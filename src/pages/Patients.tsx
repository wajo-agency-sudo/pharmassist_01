import { PatientList } from "@/components/patients/PatientList";
import { DatabaseIntegration } from "@/components/patients/DatabaseIntegration";

const Patients = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Patient Overview</h1>
        <p className="text-muted-foreground">
          Manage and view patient information and conversation history
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <PatientList />
        <div className="space-y-6">
          <DatabaseIntegration />
        </div>
      </div>
    </div>
  );
};

export default Patients;