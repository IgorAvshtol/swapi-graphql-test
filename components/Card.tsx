import { useAppContext } from '../hooks/useAppContext';

interface ICard {
  name: string | undefined;
  id: string;
}

export function Card({ name, id }: ICard) {

  const { setIsOpen, setCurrentHeroId } = useAppContext();

  const onCardClickHandler = () => {
    setIsOpen(true);
    setCurrentHeroId(id);
  };

  return (
      <div onClick={onCardClickHandler}
           className='w-[590px] h-[320px] rounded-lg bg-black flex justify-center items-center cursor-pointer shadow-[0_25px_25px_-12px_rgba(120,120,120)] hover:shadow-[0_25px_50px_-12px_rgba(0,191,255)]'>
        <div className='flex flex-col items-center'>
          <div className='w-[80px] h-[80px] flex justify-center items-center rounded-full bg-amber-500'>
            {name && name[0]}
          </div>
          <p className='mt-3 text-amber-50'>{name}</p>
        </div>
      </div>
  );
};