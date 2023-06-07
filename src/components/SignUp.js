import React from "react";
import Header from "./Header";

function SignUp() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="h-auto w-auto pt-10 pb-10 pl-5 pr-5 bg-blue-300 flex flex-col justify-center">
          <div className="flex flex-col">
            <input
              className="h-[6vh] w-[20vw] placeholder:text-center rounded-[20px] placeholder-gray-900 outline-none
              font-bold
              "
              type="text"
              id="inputField"
              name="inputField"
              placeholder="Enter your name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
