type FormFieldProps = {
    label: string;
    error?: string;
    hint?: string;
    required?: boolean;
    children: React.ReactNode
}
// exact code from demo
const FormField = ({label, error, hint, required= false, children}:FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5">
        <label className="font-semibold text-slate-700 text-sm">{label}
        {required && <span className="text-red-500 ml-1">*</span>}
        </label>      
        {children}
        { hint && !error && <p className="text-slate-400 text-xs">{hint}</p>}

        {error && (
            <p className="text-red-500 text-sm flex items-center gap-1" role='alert'>{error}</p>
        )}
    </div>
  )
}

export default FormField
