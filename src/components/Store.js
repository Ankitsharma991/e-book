import React from "react";
import Header from "./Header";
import LeftPanel from "./Store/storeSlide";
import StoreItem from "./Store/StoreItem";

function Store() {
  return (
    <div>
      <>
        <Header />
        <div className="flex w-[100vw] h-[90vh] bg-slate-200 backdrop-blur-5 gap-5">
          <div className="flex flex-col h-90vh w-[15vw] border-1 border-black  bg-white ">
            <LeftPanel />
          </div>
          <div className="border-2 border-black flex-1 flex">
            <StoreItem />
          </div>
        </div>
      </>
    </div>
  );
}

export default Store;
