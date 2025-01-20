import React from 'react';
import Navbar from '../../components/Navbar';
import UserCard from '../../components/UserCard';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow p-6 flex flex-col">
        <h1 className="text-2xl font-bold">Welcome, Jett.</h1>
        <p className="mt-2">It looks like you have no friends added currently; why not we add some?</p>

        {/* User Cards */}
        <div className="flex justify-center space-x-4 space-y-4 md:space-y-0 mt-4 ">
          {[...Array(6)].map((_, index) => (
            <UserCard key={index} />
          ))}
        </div>

        {/* Gray Background Section */}
        <div className="flex-grow flex flex-col sm:flex-row sm:space-x-4 mt-6">
  {/* Connect Section */}
  <div className="p-4 basis-full sm:basis-1/4 flex flex-col">
    <div className="connect font-bold">Connect</div>
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-gray-50 rounded-md flex-grow flex items-center justify-center mt-4 drop-shadow-md">
      <img
        src="./assets/userwithtable.png"
        className="h-32 sm:h-64 max-w-full"
        alt="User with Table"
      />
    </div>
  </div>

  {/* Matching Filter Section */}
  <div className="p-4 basis-full sm:basis-2/4 flex flex-col">
    <div className="connect font-bold">Matching Filter</div>
    <div className="bg-gradient-to-r from-pink-100 via-orange-50 to-yellow-50 rounded-md flex-grow flex flex-col items-center justify-center mt-4 drop-shadow-md">
      <div className="connect">Who do you want to connect with?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full p-4 drop-shadow-md">
        <div className="bg-white py-1 px-4 text-center rounded-full text-base sm:text-xl font-bold">
          Interest
        </div>
        <div className="bg-white py-1 px-4 text-center rounded-full text-base sm:text-xl font-bold">
          Age Range
        </div>
        <div className="bg-white py-1 px-4 text-center rounded-full text-base sm:text-xl font-bold">
          Gender
        </div>
        <div className="bg-white py-1 px-4 text-center rounded-full text-base sm:text-xl font-bold">
          Country
        </div>
        <div className="bg-white py-1 px-4 text-center rounded-full text-base sm:text-xl font-bold">
          U.S State
        </div>
        <div className="bg-white py-1 px-4 text-center rounded-full text-base sm:text-xl font-bold">
          Ethnicity
        </div>
      </div>
    </div>
  </div>

  {/* Lorem Ipsum Section */}
  <div className="p-4 basis-full sm:basis-1/4 flex flex-col">
    <div className="connect font-bold">Connection History</div>
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-gray-50 rounded-md flex-grow flex items-center justify-center mt-4 relative drop-shadow-md">
      <img src="./assets/svg/search_connectionhistory.svg" className='absolute h-10 w-10 left-3 top-3' alt="" />
      <img
        src="./assets/connectionhistory.png"
        className="h-32 sm:h-64 max-w-full"
        alt="User with Table"
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;
