import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import UserCard from "../../components/UserCard";
function VideoChat() {
  // ................Responsiveness....................
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const gridTemplate = isMobile
    ? `"welcome welcome"
       "users users"
       "connect connectionHistory"
       "matchingFilter matchingFilter"
       "matchingFilter matchingFilter"`
    : `"welcome welcome welcome welcome"
       "users users users users"
       "connect matchingFilter matchingFilter connectionHistory"
       "connect matchingFilter matchingFilter connectionHistory"
       `;
  // ................End Responsiveness....................
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        className="flex-grow grid gap-1 md:gap-3 md:mx-3 mx-2 m-0 pb-2"
        style={{
          gridTemplateAreas: gridTemplate,
          gridTemplateColumns: isMobile ? "1fr 1fr " : "1fr 1fr 1fr 1fr",
          gridTemplateRows: isMobile
            ? "1fr 1fr 1fr 1fr 1fr"
            : "1fr 1fr 1fr 1.08fr ",
        }}
      >
        <motion.div
          className="flex-grow p-6 flex flex-col "
          style={{ gridArea: "welcome" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Welcome, Jett.</h1>
          <p className="mt-2">
            It looks like you have no friends added currently; why not we add
            some?
          </p>

          {/* User Cards */}
        </motion.div>
        <motion.div
          className=" mt-[-20px]"
          style={{ gridArea: "users" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex  justify-center  mt-4 ">
            {[...Array(6)].map((_, index) => (
              <UserCard key={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className=""
          style={{ gridArea: "connect" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="connect font-bold">Connect</div>
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-gray-50 rounded-md flex-grow flex items-center justify-center mt-4 drop-shadow-md">
            <img
              src="./assets/userwithtable.png"
              className="h-32 sm:h-64 max-w-full"
              alt="User with Table"
            />
          </div>
        </motion.div>
        <motion.div
          className=" justify-self-end md:justify-self-auto min-w-[100%] md:min-w-[100%] flex flex-col"
          style={{ gridArea: "matchingFilter" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="connect font-bold">Matching Filter</div>
          <div className="bg-gradient-to-r from-pink-100 via-orange-50 to-yellow-50 rounded-md flex-grow flex flex-col items-center justify-center mt-4 drop-shadow-md">
            <div className="connect">Who do you want to connect with?</div>
            <div className="grid grid-cols-2 gap-4 mt-4 w-full p-4 drop-shadow-md">
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
        </motion.div>
        <motion.div
          className=" "
          style={{ gridArea: "connectionHistory" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="connect font-bold">Connection History</div>
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-gray-50 rounded-md flex-grow flex items-center justify-center mt-4 relative drop-shadow-md">
            <img
              src="./assets/svg/search_connectionhistory.svg"
              className="absolute h-10 w-10 left-3 top-3"
              alt=""
            />
            <img
              src="./assets/connectionhistory.png"
              className="h-32 sm:h-64 max-w-full"
              alt="User with Table"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default VideoChat;
