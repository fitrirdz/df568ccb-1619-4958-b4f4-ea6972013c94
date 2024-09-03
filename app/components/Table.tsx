import React from 'react';
import Image from 'next/image';
import TableHeaderCol from './TableHeaderCol';
import {useEmployee} from '../context/Employee';

const Table = () => {
  const {sorting} = useEmployee();
  const dummyData = [
    {
      firstName: 'Jack',
      lastName: 'Hansen',
      position: 'CEO',
      phone: '(818) 555-2387',
      email: 'robertr@dx-email.my',
    },
    {
      firstName: 'Emily',
      lastName: 'Smith',
      position: 'COO',
      phone: '(312) 555-0198',
      email: 'emilys@dx-email.my',
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      position: 'CFO',
      phone: '(213) 555-0187',
      email: 'michaelj@dx-email.my',
    },
    {
      firstName: 'Jessica',
      lastName: 'Williams',
      position: 'CTO',
      phone: '(646) 555-0123',
      email: 'jessicaw@dx-email.my',
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      position: 'CMO',
      phone: '(415) 555-0987',
      email: 'davidb@dx-email.my',
    },
    {
      firstName: 'Sarah',
      lastName: 'Davis',
      position: 'VP of Sales',
      phone: '(202) 555-0111',
      email: 'sarahd@dx-email.my',
    },
    {
      firstName: 'Matthew',
      lastName: 'Martinez',
      position: 'VP of Marketing',
      phone: '(305) 555-0176',
      email: 'matthewm@dx-email.my',
    },
    {
      firstName: 'Ashley',
      lastName: 'Garcia',
      position: 'VP of Product',
      phone: '(210) 555-0209',
      email: 'ashleyg@dx-email.my',
    },
    {
      firstName: 'Brian',
      lastName: 'Wilson',
      position: 'VP of Engineering',
      phone: '(602) 555-0154',
      email: 'brianw@dx-email.my',
    },
    {
      firstName: 'Rebecca',
      lastName: 'Lopez',
      position: 'HR Manager',
      phone: '(704) 555-0192',
      email: 'rebeccal@dx-email.my',
    },
    {
      firstName: 'Daniel',
      lastName: 'Harris',
      position: 'Legal Counsel',
      phone: '(917) 555-0189',
      email: 'danielh@dx-email.my',
    },
  ];

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
        {dummyData?.map((item, index) => (
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
