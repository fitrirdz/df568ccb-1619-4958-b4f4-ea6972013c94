import * as Yup from 'yup';

const phoneRegex =
  /^(\+?1\s?)?(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const schema = Yup.object({
  employees: Yup.array()
    .of(
      Yup.object().shape({
        firstName: Yup.string()
          .max(50, 'Maximal 50 characters')
          .required('First Name is required'),
        lastName: Yup.string()
          .max(50, 'Maximal 50 characters')
          .required('Last Name is required'),
        position: Yup.string()
          .max(50, 'Maximal 50 characters')
          .required('Position is required'),
        phone: Yup.string()
          .min(7, 'Minimal 7 characters')
          .max(15, 'Maximal 15 characters')
          .matches(phoneRegex, 'Incorrect phone number format')
          .required('Phone is required'),
        email: Yup.string()
          .required('Email is required')
          .matches(emailRegex, 'Email is invalid')
          .max(50, 'Maximal 50 characters'),
      })
    )
    .required('Employees is required'),
});
