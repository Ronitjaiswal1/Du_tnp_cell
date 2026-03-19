import { AcademicsNav } from "@/components/academics/academics-nav";
import { DepartmentsReferenceContent } from "@/components/academics/departments-reference-content";

export const metadata = {
  title: "Academics | Faculty of Technology, University of Delhi",
  description: "Departments and faculty information for the Faculty of Technology, University of Delhi.",
};

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AcademicsNav subPage="departments" />
      <DepartmentsReferenceContent />
    </div>
  );
}
