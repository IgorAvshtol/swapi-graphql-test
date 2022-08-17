import Image from 'next/image';

export function Header() {
  return (
      <header className='flex justify-center items-center w-full h-[480px] relative'>
        <Image src='/main.png' alt='main-cover' layout='fill' objectFit='cover'/>
        <div className='w-[406px] h-[238px] relative flex flex-col items-center justify-between'>
          <Image src='/logoUp.png' alt='logo' width='406px' height='96px'/>
          <h1 className='font-medium text-2xl text-amber-50 tracking-widest font-shadow'>CHARACTER ENCYCLOPEDIA</h1>
          <Image src='/logoDown.png' alt='logo' width='406px' height='96px'/>
        </div>
      </header>
  );
};