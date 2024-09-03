'use client';
import React, {createContext, useState, ReactNode, useContext} from 'react';

interface Employee {
  firstName: string;
  lastName: string;
  position: string;
  phone: string;
  email: string;
}

export interface Sorting {
  id: string;
  name: string;
  type: string;
  isActive: boolean;
}

interface EmployeeContextType {
  employee: Employee | null;
  sorting: Sorting[];
  setEmployee: React.Dispatch<React.SetStateAction<Employee | null>>;
  setSorting: React.Dispatch<React.SetStateAction<Sorting[]>>;
}

const EmployeeContext = createContext<EmployeeContextType>({
  employee: null,
  sorting: [],
  setEmployee: () => {},
  setSorting: () => {},
});

interface EmployeeProviderProps {
  children: ReactNode;
}

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({
  children,
}) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
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
      isActive: true,
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

  return (
    <EmployeeContext.Provider
      value={{employee, setEmployee, sorting, setSorting}}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);
