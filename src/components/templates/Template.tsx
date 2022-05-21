import { useQuery } from 'react-query';
import { Molecule } from '../molecules/Molecule';

const fetchRandomDogs = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random/3');
  return res.json();
};

export const Template = () => {
  const { data, isLoading, isError } = useQuery('randomDogs', fetchRandomDogs, {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  console.log({ data });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error!!</span>;
  }

  return (
    <div>
      <div>Template</div>
      {data.message.map((url: string, i: number) => (
        <img src={url} alt='test' key={i} />
      ))}
      <Molecule />
    </div>
  );
};
