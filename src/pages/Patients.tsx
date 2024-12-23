import { PatientList } from "@/components/patients/PatientList";

const Patients = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Patient Overview</h1>
        <p className="text-muted-foreground">
          Manage and view patient information and conversation history
        </p>
      </div>
      <PatientList />
    </div>
  );
};

export default Patients;