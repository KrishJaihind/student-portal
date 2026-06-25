
import Link from "next/dist/client/link";
import students from "@/data/students";
import { registerationSchema } from "@/data/schema";
import FormField from "@/components/FormField";
export default function Home() {
  return (
    <>
      <div className="mx-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white-900 mb-3">Add more students </h2>
        <p className="text-slate-500 mb-8">Add more students using this form</p>
        <Link href='/' className="inline-bock rounded-lg bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-700 px-4">
          Add Student
        </Link>
      </div>

      {/* Display Students */}
      <div>
          <h3 className="text-xl font-semibold text-white-800 py-2 px-4">Student List</h3>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-2">
        
        {students.map((s) => (
          <div
            key={s.id}
            className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md">
            {/* Card Header - Name*/}
            <div className="flex justify-between border-b border-slate-100 pb-2 mb-3">
            <h3 className="font-bold text-slate-800">{s.fullName}</h3>
            </div>
            {/* Details - Date of Birth & Grade */}
            <div className="mt-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-400 text-xs font-semibold">Date of Birth</span>
                <span className="font-medium text-slate-700">{s.dob}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-xs font-semibold">Grade</span>
                <span className="font-medium text-slate-700">{s.studentGrade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}