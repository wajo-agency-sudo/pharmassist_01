import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, Clock, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { PatientHistory } from "./PatientHistory";

const mockPatients = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    lastContact: "2 hours ago",
    status: "active",
    conversationCount: 5,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    lastContact: "1 day ago",
    status: "inactive",
    conversationCount: 3,
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "+1 234 567 892",
    lastContact: "3 days ago",
    status: "active",
    conversationCount: 8,
  },
];

export function PatientList() {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="rounded-lg border bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead className="hidden md:table-cell">Last Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Conversations</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="md:hidden text-xs text-muted-foreground">
                        {patient.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{patient.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{patient.lastContact}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={patient.status === "active" ? "default" : "secondary"}
                  >
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{patient.conversationCount}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedPatient(
                        selectedPatient === patient.id ? null : patient.id
                      )
                    }
                  >
                    {selectedPatient === patient.id
                      ? "Hide History"
                      : "View History"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedPatient && <PatientHistory patientId={selectedPatient} />}
    </div>
  );
}