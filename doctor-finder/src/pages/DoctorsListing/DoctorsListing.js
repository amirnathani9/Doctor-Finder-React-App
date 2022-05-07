import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useDocumentTitle } from "../../hooks";

export function DoctorsListing() {
    useDocumentTitle("Doctor Finder - Doctors")
    return <>
        <Sidebar />
    </>
};
