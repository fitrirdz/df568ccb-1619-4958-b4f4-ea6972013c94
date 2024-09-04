import React, { useEffect } from 'react';
import Image from 'next/image';
import TableHeaderCol from './TableHeaderCol';
import { useEmployee } from '../context/Employee';
import TableInputCol from './TableInputCol';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Employee } from '../interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../utils/validationSchema';
import PlusIcon from '@/public/icons/plus.png';
import SaveIcon from '@/public/icons/tech.png';
import UndoIcon from '@/public/icons/undo.png';
import ErrorMessage from './ErrorMessage';

const Table = () => {
  const { sorting, employee, setEmployee } = useEmployee();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ employees: Employee[] }>({
    resolver: yupResolver(schema),
    defaultValues: { employees: [] },
  });

  const onSubmit: SubmitHandler<{ employees: Employee[] }> = (data: any) => {
    setEmployee(data?.employees || []);
  };

  useEffect(() => {
    setValue('employees', employee);
  }, [employee]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-1 w-full'>
      <div className='flex w-full justify-end p-6 gap-6'>
        <button type='button'>
          <Image
            src={PlusIcon}
            alt='arrow'
            width={20}
            height={20}
            className='grayscale'
          />
        </button>
        <button type='submit'>
          <Image
            src={SaveIcon}
            alt='arrow'
            width={20}
            height={20}
            className='grayscale'
          />
        </button>
        <button type='button'>
          <Image
            src={UndoIcon}
            alt='arrow'
            width={20}
            height={20}
            className='grayscale'
          />
        </button>
      </div>
      <table className='flex-1 w-full border border-gray-300 border-b-0 table-fixed'>
        <thead>
          <tr className='border-b border-gray-300 text-gray-500 font-semibold'>
            {sorting?.map((item, index) => (
              <th key={index}>
                <TableHeaderCol {...item} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employee?.map((item, index) => (
            <tr key={index} className='border-b border-gray-300 text-gray-700'>
              <td className='relative'>
                <TableInputCol
                  id={`employees.${index}.firstName`}
                  value={item.firstName}
                  register={register}
                  setValue={setValue}
                />
                {errors.employees?.[index]?.firstName?.message && (
                  <ErrorMessage
                    message={errors?.employees?.[index]?.firstName?.message}
                  />
                )}
              </td>
              <td className='relative'>
                <TableInputCol
                  id={`employees.${index}.lastName`}
                  value={item.lastName}
                  register={register}
                  setValue={setValue}
                />
                {errors.employees?.[index]?.lastName?.message && (
                  <ErrorMessage
                    message={errors?.employees?.[index]?.lastName?.message}
                  />
                )}
              </td>
              <td className='relative'>
                <TableInputCol
                  id={`employees.${index}.position`}
                  value={item.position}
                  register={register}
                  setValue={setValue}
                />
                {errors.employees?.[index]?.position?.message && (
                  <ErrorMessage
                    message={errors?.employees?.[index]?.position?.message}
                  />
                )}
              </td>
              <td className='relative'>
                <TableInputCol
                  id={`employees.${index}.phone`}
                  value={item.phone}
                  register={register}
                  setValue={setValue}
                />
                {errors.employees?.[index]?.phone?.message && (
                  <ErrorMessage
                    message={errors?.employees?.[index]?.phone?.message}
                  />
                )}
              </td>
              <td className='relative'>
                <TableInputCol
                  id={`employees.${index}.email`}
                  value={item.email}
                  register={register}
                  setValue={setValue}
                />
                {errors.employees?.[index]?.email?.message && (
                  <ErrorMessage
                    message={errors?.employees?.[index]?.email?.message}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Table;
