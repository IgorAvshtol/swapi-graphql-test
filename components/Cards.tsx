import { Card } from './Card';
import { useGetAllPeopleQuery } from '../generated/graphql';


export function Cards() {
  const { data, fetchMore } = useGetAllPeopleQuery({
    variables: { after: null }
  });

  const onMoreButtonHandler = async () => {
    const endCursor = data?.allPeople.pageInfo.endCursor;
    await fetchMore({
      variables: { after: endCursor },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        fetchMoreResult.allPeople.people = [
          ...previousQueryResult.allPeople.people,
          ...fetchMoreResult.allPeople.people
        ];
        return fetchMoreResult;
      }
    });
  };

  return (
      <div className='w-3/4 flex flex-col justify-center'>
        <div className='mt-14 grid justify-items-center gap-x-20 gap-y-12 grid-cols-cards'>
          {
            data?.allPeople?.people?.map(card => <Card key={card!.name} name={card!.name} id={card!.id}/>)
          }
        </div>
        {data?.allPeople?.people?.length < data?.allPeople.totalCount
            && <div className='w-full flex justify-center'>
              <button
                  className='mt-20 w-40 border-2 border-gray-400 rounded-lg text-2xl text-amber-50 hover:text-amber-200 hover:border-transparent'
                  onClick={onMoreButtonHandler}>More
              </button>
            </div>
        }
      </div>
  );
};

