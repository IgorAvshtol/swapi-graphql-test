import Image from 'next/image';
import React, { useRef } from 'react';

import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useAppContext } from '../hooks/useAppContext';
import { useGetCurrentHeroQuery } from '../generated/graphql';
import { Spinner } from './Spinner';

export function Popup() {

  const { setIsOpen, currentHeroId } = useAppContext();

  const { data, loading } = useGetCurrentHeroQuery({
    variables: {
      id: currentHeroId
    }
  });

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, setIsOpen);

  return (
      <div className='w-full h-full fixed backdrop-blur z-10'>
        <div className='w-full h-screen fixed flex justify-center items-center'>
          {loading
              ? <Spinner/>
              : <div ref={ref}
                     className='px-16 py-20 w-[800px] h-[492px] flex flex-col rounded-[8px] bg-black border-2 border-[#808080] text-amber-50'>
                <div className='flex items-center'>
                  <div
                      className='w-[80px] h-[80px] flex justify-center items-center rounded-full bg-fuchsia-500 font-bold text-4xl'>
                    N
                  </div>
                  <p className='ml-6 font-bold text-2xl'>{data?.person?.name}</p>
                </div>
                <div className='w-full mt-14 border-b-2 border-gray-400'/>
                <div className='mt-14 grid justify-center gap-x-20 gap-y-8 grid-cols-2'>
                  <div className='flex'>
                    <Image src='/traced.png' width={20} height={20} alt='logoCalendar'/>
                    <p className='ml-2 text-[#808080]'>Birth year</p>
                    <p className='ml-4 font-bold'>{data?.person?.birthYear}</p>
                  </div>
                  <div className='flex'>
                    <Image src='/alien.png' width={18} height={20} alt='logoSpecies'/>
                    <p className='ml-2 text-[#808080]'>Species</p>
                    <p className='ml-4 font-bold'>Species</p>
                  </div>
                  <div className='flex'>
                    <Image src='/gender.png' width={20} height={20} alt='logoGender'/>
                    <p className='ml-2 text-[#808080]'>Gender</p>
                    <p className='ml-4 font-bold'>{data?.person?.gender}</p>
                  </div>
                  <div className='flex'>
                    <Image src='/world.png' width={20} height={20} alt='logoWorld'/>
                    <p className='ml-2 text-[#808080]'>World</p>
                    <p className='ml-4 font-bold'>{data?.person?.homeworld?.name}</p>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
  );
};