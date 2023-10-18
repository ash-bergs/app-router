'use client';
import Head from 'next/head';
import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
const LazyImage = React.lazy(() => import('@/components/LazyImage'));

const Spinner = () => (
  <div className="text-black">
    <p>Loading...</p>
  </div>
);

type PageProps = {
  params: {
    dog: string;
  };
};

const DogPage = ({ params }: PageProps) => {
  const apiURL = `https://dog.ceo/api/breed/hound/${params.dog}/images/random`;
  const [dogImg, setDogImg] = useState('');
  const pageTitle = `${
    params.dog.charAt(0).toUpperCase() + params.dog.slice(1)
  } Hound`; // Capitalize the first letter

  console.log('params', pageTitle);
  const fetchDogImage = async () => {
    try {
      const {
        data: { message },
      } = await axios.get(apiURL);
      setDogImg(message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  // Initial image fetch on component mount
  useEffect(() => {
    fetchDogImage();
  }, [params.dog]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 text-black">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">{params.dog}</h1>
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex flex-wrap justify-center column space-x-4 ">
                {/* Display dog image */}
                <Suspense fallback={<Spinner />}>
                  {dogImg && (
                    <LazyImage
                      src={dogImg}
                      alt={`${params.dog} breed`}
                      className="mt-4 rounded-lg shadow-lg"
                    />
                  )}
                </Suspense>

                {/* Button to fetch new dog image */}
                <button
                  onClick={fetchDogImage}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Fetch New Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogPage;
