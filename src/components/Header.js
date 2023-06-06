import React, { useState } from "react";
import Image from "../images/2.jpg";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="flex text-white  px-[50px]  bg-black h-[10vh] items-center ">
        <div className="flex flex-1">
          <h1 className="text-3xl font-bold flex-1 cursor-pointer">BookGhar</h1>
        </div>
        <div className="flex items-center gap-10 mr-[50px] cursor-pointer">
          <div className="h-[5vh] w-[4vw] ease-in flex justify-center items-center border-cyan-500 hover:border-b-2 ">
            <h2 className="ease-in-out hover:text-cyan-200 flex text-lg items-center px-0 py-[12px] hover:scale-150 duration-250">
              Home
            </h2>
          </div>
          <div className="h-[5vh] w-[4vw] ease-in flex justify-center items-center border-cyan-500 hover:border-b-2">
            <h2 className=" flex text-lg items-center px-0 py-[12px] hover:scale-150 duration-250 ease-in-out hover:text-cyan-200">
              Store
            </h2>
          </div>
          <div className="h-[5vh]  w-[4vw] ease-in flex justify-center items-center border-cyan-500 hover:border-b-2">
            <h2 className="hover:text-cyan-200 flex text-lg items-center px-0 py-[12px] hover:scale-150 duration-250 ease-in-out">
              Contact
            </h2>
          </div>
          <div className="h-[5vh]  w-[4vw] ease-in flex justify-center items-center border-cyan-500 hover:border-b-2">
            <h2 className="hover:text-cyan-200 flex text-lg items-center px-0 py-[12px] hover:scale-150 duration-250 ease-in-out">
              Register
            </h2>
          </div>
        </div>
        <div
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="w-[5rem] mr-[30px]"
        >
          {isLoggedIn ? (
            <div className="flex flex-col justify-center items-center">
              <img
                src={Image}
                className="h-[3rem] w-[3rem] rounded-bl-full rounded-br-full rounded-tr-full rounded-tl-full border-2 border-white"
                alt="User_Image"
              />
              <p className="text-xs">Username</p>
            </div>
          ) : (
            <div className="border-2 rounded-lg cursor-pointer bg-white text-black font-bold p-2 w-[8rem] text-center text-lg hover:opacity-80">
              <p>Login</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
