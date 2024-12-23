import { PatientList } from "@/components/patients/PatientList";
import { DatabaseIntegration } from "@/components/patients/DatabaseIntegration";

const Patients = () => {
  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Patient Overview</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Manage and view patient information and conversation history
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 md:gap-6">
        <PatientList />
        <div className="space-y-6">
          <DatabaseIntegration />
        </div>
      </div>
    </div>
  );
};

export default Patients;