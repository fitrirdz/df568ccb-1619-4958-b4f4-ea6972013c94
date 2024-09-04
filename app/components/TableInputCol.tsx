import React from 'react';
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
  return (
    <input
      className='p-4 w-full truncate focus:border-b-2 focus:border-blue-400'
      type='text'
      {...register(id)}
    />
  );
};

export default TableInputCol;
