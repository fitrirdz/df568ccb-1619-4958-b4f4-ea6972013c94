export interface Employee {
  firstName: string;
  lastName: string;
  position: string;
  phone: string;
  email: string;
  [key: string]: string;
}

export interface Sorting {
  id: string;
  name: string;
  type: string;
  isActive: boolean;
}
