'use client';
import { useState } from "react";
import seedStudents from "@/data/students";
import StudentCard from "@/components/StudentCard";
import StudentForm from "@/components/StudentForm";
import { type StudentFormData } from "@/data/schema";

type Student = {
  id: number;
  fullName: string;
  dob: string;
  studentGrade: string;
};

export default function Home() {
  const [students, setStudents] = useState<Student[]>(seedStudents);
  const [showForm, setShowForm] = useState(false);

  const addStudent = (data: StudentFormData) => {
    const nextId = students.reduce((max, s) => Math.max(max, s.id), 0) + 1;
    setStudents((prev) => [...prev, { id: nextId, ...data }]);
    setShowForm(false);
  };

  return (
    <main>
      {/* Form Section */}
      <div className="mx-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white-900 mb-3">Add more students</h2>
        <p className="text-slate-500 mb-8">Add more students using this form</p>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="inline-block rounded-lg bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-700 px-4"
        >
          {showForm ? "Close" : "Add Student"}
        </button>
        {showForm && (
          <div className="mt-8">
            <StudentForm onAdd={addStudent} />
          </div>
        )}
      </div>

      {/* Student List */}
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
