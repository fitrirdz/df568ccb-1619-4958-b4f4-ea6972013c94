import React from 'react';
import Image from 'next/image';
import TableHeaderCol from './TableHeaderCol';
import { useEmployee } from '../context/Employee';

const Table = () => {
  const { sorting, employee } = useEmployee();

  return (
    <table className='flex-1 w-full border border-gray-300 border-b-0 table-fixed'>
      <thead>
        <tr className='border-b border-gray-300 text-gray-500 font-semibold'>
          {sorting?.map((item, index) => (
            <th>
              <TableHeaderCol key={index} {...item} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employee?.map((item, index) => (
          <tr key={index} className='border-b border-gray-300 text-gray-700'>
            <td className='p-4'>{item.firstName}</td>
            <td className='p-4'>{item.lastName}</td>
            <td className='p-4'>{item.position}</td>
            <td className='p-4'>{item.phone}</td>
            <td className='p-4'>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
