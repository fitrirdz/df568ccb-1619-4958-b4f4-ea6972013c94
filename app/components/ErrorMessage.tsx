import React from 'react';

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  return (
    <div className='absolute z-40 top-full left-0 mt-1 bg-red-500 text-white text-sm p-2 rounded-md select-none'>
      {message}
    </div>
  );
};

export default ErrorMessage;
