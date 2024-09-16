import React from 'react';

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  as?: 'input' | 'textarea';
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
  as = 'input',
  className = '',
}) => {
  const inputClasses = "flex-1 shrink gap-2.5 self-stretch px-2.5 py-8 leading-none rounded-xl border-2 border-solid border-zinc-500 border-opacity-60";
  const combinedClasses = `${inputClasses} ${className}`;
  
  const InputComponent = as;

  return (
    <div className={combinedClasses}>
      <label htmlFor={name} className="sr-only">{label}</label>
      <InputComponent
        id={name}
        name={name}
        type={type}
        placeholder={label}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default InputField;