import React from "react";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${
        className || ""
      }`}
    >
      <img className="w-5 h-5 mr-4 animate-spin" src={loading} alt="Loading" />
      <p>AI is generating...</p>
    </div>
  );
};

export default Generating;
