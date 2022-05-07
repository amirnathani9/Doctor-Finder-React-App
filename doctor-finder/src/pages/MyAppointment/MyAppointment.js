import { Sidebar } from "../../components";
import { useDocumentTitle } from "../../hooks";

export function MyAppointment() {
  useDocumentTitle("Doctor Finder - My Appointment")
  return (
    <>
      <Sidebar />
    </>
  );
}
