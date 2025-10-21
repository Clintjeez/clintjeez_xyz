import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className='flex flex-col mt-3'>
      <label htmlFor={label} className='text-[#ffffff88] text-[14px] mb-2 pl-1'>
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className='bg-transparent border border-[#7777784d] rounded-md p-3 focus:outline outline-offset-1 outline-[#edd86e53] placeholder:text-[#ffffff3b]'
      >
        <option value='' disabled className='text-[#ffffff3b]'>
          Project type...
        </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
