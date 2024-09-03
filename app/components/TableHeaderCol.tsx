'use client';
import Image from 'next/image';
import React, {useMemo} from 'react';
import ArrowIcon from '@/public/icons/up-arrow.png';
import {Sorting, useEmployee} from '../context/Employee';

const TableHeaderCol = ({id, name, isActive, type}: Sorting) => {
  const {sorting, setSorting} = useEmployee();

  function handleClick() {
    let tempType = 'descending';
    if (type === 'descending') {
      tempType = 'ascending';
    }

    const tempSorting = [...sorting];
    const indexSorting = tempSorting?.findIndex((item) => item.id === id);

    const tempData = tempSorting?.map((item, index) => {
      if (index === indexSorting) {
        return {
          ...item,
          isActive: true,
          type: tempType,
        };
      }

      return {
        ...item,
        isActive: false,
      };
    });

    setSorting(tempData);
  }

  return (
    <button
      onClick={handleClick}
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
