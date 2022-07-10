import React from "react";

const Rules = () => {
  return (
    <div class="bg-black w-full grid grid-cols-12 gap-1">
      <div className="col-span-12">
        <h1 class="self-center text-white text-center text-4xl font-bold">
          Rules & Regulations
        </h1>
      </div>
      <div className="col-span-6">
        <img src={"/RulesNRegulations/RulesRegImg.jpg"} alt="" />
      </div>
      <div className="col-span-6"></div>
    </div>
  );
};

export default Rules;
