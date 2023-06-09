import React from "react";
import { BiBookAdd } from "react-icons/bi";
import StoreItem from "./StoreItem";

function LeftPanel() {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex justify-start items-center gap-5 m-2 p-3 rounded-sm hover:bg-slate-400 hover:outline-1 hover:outline-blue-700 cursor-pointer">
        <BiBookAdd className="h-10 w-10" />
        <p className="font-bold text-lg">ADD BOOKS</p>
      </div>
    </div>
  );
}

export default LeftPanel;
