import Link from 'next/link';
import axios from 'axios';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hounds',
  description: 'Look at quality hounds',
};

export async function generateStaticParams() {
  const { data } = await axios.get(apiURL);
  const dogs = data.message;

  return dogs.map((dog: string) => ({
    params: {
      dog,
    },
  }));
}

//https://dog.ceo/api/breeds/list/all
const apiURL = 'https://dog.ceo/api/breed/hound/list';

const DogsPage = async () => {
  const { data } = await axios.get(apiURL);
  const dogs = data.message;

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 text-black">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Hounds</h1>
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex flex-wrap justify-center space-x-4 ">
              {/* Dogs list */}
              {dogs.map((dog: string, index: any) => (
                <div key={index} className="mb-4">
                  <Link href={`/dogs/${encodeURIComponent(dog)}`} passHref>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      {dog}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogsPage;
