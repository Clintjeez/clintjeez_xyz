import React from 'react';

const CustomInput: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}> = ({ label, placeholder, value, onChange, type }) => {
  return (
    <div className='flex flex-col mt-3'>
      <label htmlFor={label} className='text-[#ffffff88] text-[14px] mb-2 pl-1'>
        {label}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        className='bg-transparent border border-[#7777784d] rounded-md p-3 focus:outline outline-offset-1 outline-[#edd86e53] placeholder:text-[#ffffff3b]'
      />
    </div>
  );
};

export default CustomInput;
