interface StudentCardProps {
    fullName: string;
    dob: string;
    studentGrade: string;
}

const StudentCard = ({
    fullName,
    dob,
    studentGrade
}: StudentCardProps) => {
    return (
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md">

            {/* Card Header - Name*/}
            <div className="flex justify-between border-b border-slate-100 pb-2 mb-3">
                <h3 className="font-bold text-slate-800">{fullName}</h3>
            </div>

            {/* Details - Date of Birth & Grade */}
            <div className="mt-3 text-sm text-slate-600">
                <div className="flex justify-between">
                    <span className="text-slate-400 text-xs font-semibold">Date of Birth</span>
                    <span className="font-medium text-slate-700">{dob}</span>
                </div>
                <div className="flex justify-between mt-1">
                    <span className="text-slate-400 text-xs font-semibold">Grade</span>
                    <span className="font-medium text-slate-700">{studentGrade}</span>
                </div>
            </div>

        </div>
    );
};

export default StudentCard;