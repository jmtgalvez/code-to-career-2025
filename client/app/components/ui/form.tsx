export function FormField({
  label,
  name,
  type = 'text',
  min,
  max,
  accept,
  required = false,
  disabled = false,
  value,
}: {
  label: string;
  name: string;
  type?: string;
  min?: number;
  max?: number;
  accept?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string | number;
}) {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label htmlFor={name}>{label}:</label>
      <input
        className='p-1 text-black border border-black disabled:bg-gray-700 disabled:dark:text-white'
        type={type}
        name={name}
        min={min}
        max={max}
        accept={accept}
        required={required}
        disabled={disabled}
        defaultValue={value}
      />
    </div>
  );
}
