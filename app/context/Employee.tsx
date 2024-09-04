'use client';
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Employee, Sorting } from '../interfaces';

interface EmployeeContextType {
  employee: Employee[];
  sorting: Sorting[];
  setEmployee: React.Dispatch<React.SetStateAction<Employee[]>>;
  setSorting: React.Dispatch<React.SetStateAction<Sorting[]>>;
  handleSorting: (value: Sorting) => void;
}

const EmployeeContext = createContext<EmployeeContextType>({
  employee: [],
  sorting: [],
  setEmployee: () => {},
  setSorting: () => {},
  handleSorting: () => {},
});

interface EmployeeProviderProps {
  children: ReactNode;
}

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({
  children,
}) => {
  const [employee, setEmployee] = useState<Employee[]>([
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
  ]);

  const [sorting, setSorting] = useState<Sorting[]>([
    {
      id: 'firstName',
      name: 'First Name',
      type: 'descending',
      isActive: false,
    },
    {
      id: 'lastName',
      name: 'Last Name',
      type: 'descending',
      isActive: false,
    },
    {
      id: 'position',
      name: 'Position',
      type: 'descending',
      isActive: false,
    },
    {
      id: 'phone',
      name: 'Phone',
      type: 'descending',
      isActive: false,
    },
    {
      id: 'email',
      name: 'Email',
      type: 'descending',
      isActive: false,
    },
  ]);

  const handleSorting = ({ id, type }: Sorting) => {
    // manage the sorting fields
    let tempType = type === 'descending' ? 'ascending' : 'descending';

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

    // manage the table data
    const tempEmployees = [...employee];

    tempEmployees.sort((a, b) => {
      return tempType === 'ascending'
        ? a[id].localeCompare(b[id])
        : b[id].localeCompare(a[id]);
    });

    setEmployee(tempEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{ employee, setEmployee, sorting, setSorting, handleSorting }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);
