'use client';
import Image from 'next/image';
import React from 'react';
import ArrowIcon from '@/public/icons/up-arrow.png';
import { Sorting, useEmployee } from '../context/Employee';

const TableHeaderCol = ({ id, name, isActive, type }: Sorting) => {
  const { handleSorting } = useEmployee();

  return (
    <button
      onClick={() => handleSorting({ id, name, isActive, type })}
      className='w-full p-4 hover:bg-gray-100 hover:cursor-pointer hover:text-black flex items-center gap-2'
    >
      {name}
      {isActive && (
        <Image
          src={ArrowIcon}
          alt='arrow'
          width={16}
          height={24}
          className={type === 'descending' ? 'rotate-180' : ''}
        />
      )}
    </button>
  );
};

export default TableHeaderCol;
