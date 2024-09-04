import React, { useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Employee } from '../interfaces';

const TableInputCol = ({
  id,
  value,
  register,
  setValue,
}: {
  id: 'employees' | `employees.${number}` | `employees.${number}.${string}`;
  value: string;
  register: UseFormRegister<{ employees: Employee[] }>;
  setValue: UseFormSetValue<{
    employees: Employee[];
  }>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState<string | null>(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false); // Stop editing when the input loses focus
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
    setValue(id, event.target.value);
  };

  return (
    <div onClick={handleDoubleClick}>
      {isEditing ? (
        <input
          className='p-4 w-full truncate focus:border-b-2 focus:border-blue-400'
          type='text'
          {...register(id)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      ) : (
        <p className='p-4 w-full truncate'>{newValue || value}</p>
      )}
    </div>
  );
};

export default TableInputCol;
