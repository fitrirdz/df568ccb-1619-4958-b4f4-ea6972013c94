'use client';
import Image from 'next/image';
import Table from './components/Table';
import PlusIcon from '@/public/icons/plus.png';
import SaveIcon from '@/public/icons/tech.png';
import UndoIcon from '@/public/icons/undo.png';
import {EmployeeProvider} from './context/Employee';

export default function Home() {
  return (
    <main className='min-h-screen p-8'>
      <div className='flex w-full justify-end p-6 gap-6'>
        <button>
          <Image
            src={PlusIcon}
            alt='arrow'
            width={20}
            height={20}
            style={{filter: 'grayscale(10%)'}}
          />
        </button>
        <button>
          <Image
            src={SaveIcon}
            alt='arrow'
            width={20}
            height={20}
            style={{filter: 'grayscale(10%)'}}
          />
        </button>
        <button>
          <Image
            src={UndoIcon}
            alt='arrow'
            width={20}
            height={20}
            style={{filter: 'grayscale(10%)'}}
          />
        </button>
      </div>
      <Table />
    </main>
  );
}
