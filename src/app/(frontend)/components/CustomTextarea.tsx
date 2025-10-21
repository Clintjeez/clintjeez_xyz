import React from 'react';

interface CustomTextareaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='flex flex-col mt-3'>
      <label htmlFor={label} className='text-[#ffffff88] text-[14px] mb-2 pl-1'>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='bg-transparent border border-[#7777784d] rounded-md p-3 focus:outline outline-offset-1 outline-[#edd86e53] placeholder:text-[#ffffff3b]'
      />
    </div>
  );
};

export default CustomTextarea;
