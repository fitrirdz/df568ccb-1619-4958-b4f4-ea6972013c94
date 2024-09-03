import Image from 'next/image';
import React from 'react';
import ArrowIcon from '@/public/icons/up-arrow.png';

const TableHeaderCol = ({ title }: { title: string }) => {
  return (
    <td className='p-4 hover:bg-gray-100 hover:cursor-pointer hover:text-black flex items-center gap-2'>
      {title}
      <Image
        src={ArrowIcon}
        alt='arrow'
        width={16}
        height={24}
        style={{ filter: 'grayscale(100%)' }}
      />
    </td>
  );
};

export default TableHeaderCol;
