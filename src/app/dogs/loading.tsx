const DogLoader = async () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 text-black">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Hounds</h1>
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex flex-wrap justify-center space-x-4 ">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogLoader;
