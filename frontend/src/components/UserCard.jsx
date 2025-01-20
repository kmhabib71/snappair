import React from "react";

const UserCard = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="absolute top-2 right-[0.3rem] w-6 h-6 bg-green-500 rounded-full  border-4 border-black"></div>
      <img
        src="./assets/svg/user.svg"
        alt="User"
        className="w-24 h-24 rounded-full"
      />
      <button className="absolute -bottom-1 md:-bottom-3  bg-yellow-400  rounded-full w-8 h-8  border-3 border-black text-black text-center font-bold">
        +
      </button>
    </div>
  );
};

export default UserCard;
