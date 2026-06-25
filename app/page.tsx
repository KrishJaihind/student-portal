'use client';
import Link from "next/link";
import students from "@/data/students";
import StudentCard from "@/components/StudentCard";
export default function Home() {
  return (
    <main>
      {/* Form Section*/}
      <div className="mx-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white-900 mb-3">Add more students </h2>
        <p className="text-slate-500 mb-8">Add more students using this form</p>
        <Link href="/" className="inline-bock rounded-lg bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-700 px-4">
          Add Student
        </Link>
      </div>
      {/* Student List*/}
      <div>
        <h3 className="text-xl font-semibold text-white-800 py-2 px-4">Student List</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-2 px-4">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            fullName={student.fullName}
            dob={student.dob}
            studentGrade={student.studentGrade}
          />
        ))}
      </div>
    </main>
  );
}