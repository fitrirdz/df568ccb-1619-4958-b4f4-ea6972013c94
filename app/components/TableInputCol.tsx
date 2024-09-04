import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Employee } from '../interfaces';

const TableInputCol = ({
  id,
  value,
  register,
  disabled = false,
}: {
  id: 'employees' | `employees.${number}` | `employees.${number}.${string}`;
  value: string;
  register: UseFormRegister<{ employees: Employee[] }>;
  disabled?: boolean;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false); // Stop editing when the input loses focus
  };

  return (
    <div onClick={handleDoubleClick}>
      {isEditing ? (
        <input
          className='p-4 w-full truncate border-b-2 border-blue-400'
          type='text'
          {...register(id)}
          onBlur={handleBlur}
        />
      ) : (
        <p className='p-4 w-full truncate'>{value}</p>
      )}
    </div>
  );
};

export default TableInputCol;
