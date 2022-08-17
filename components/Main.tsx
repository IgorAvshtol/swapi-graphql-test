import Image from 'next/image';

import { Cards } from './Cards';

export function Main() {
  return (
      <main className='w-full flex flex-col justify-center items-center'>
        <div className='relative w-[400px]'>
          <input placeholder='Search by name'
                 className='w-full h-10 mt-10 px-2 caret-gray-500 bg-transparent border-b-2 border-b-gray-500
                            placeholder-gray-600 focus:placeholder-transparent focus:outline-0'
          />
          <div className='absolute right-0 bottom-1'>
            <Image src='/search.png' alt='search-logo' width='16px' height='16px'/>
          </div>
        </div>
        <Cards/>
      </main>
  );
};