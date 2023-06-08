import React from "react";
import Image from "../images/3.jpg";
import Slider from "./Slider";

// import Center from "./Center";

function Body() {
  return (
    <>
      <div>
        <div
          className={`bg-opacity-90 bg-black bg-cover flex justify-center items-center text-white flex-col z-0 min-h-[90vh] w-[100vw] bg-${Image}`}
        >
          <div className="flex mb-5 border-b-2 border-white border-dashed">
            <h1 className="font-bold text-3xl">
              Bestselling Books of the Week
            </h1>
          </div>
          <div className="z-100 text-white w-[30vw] h-auto flex flex-col justify-center">
            <div className="flex flex-1 text-black">
              <Slider />
            </div>
            <div className="border-2 rounded-[20px] mt-6 bg-white text-black p-4  flex justify-center items-center hover:opacity-90">
              <p
                className="font-bold text-lg hover:scale-110 duration-250
            "
              >
                Find Learnings
              </p>
            </div>
            <p className="text-center mt-4 leading-6 ">
              Your favorite reads are just one click away, Experience the joy of
              reading, simplified and accessible from the comfort of your own
              device to your door-step
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
