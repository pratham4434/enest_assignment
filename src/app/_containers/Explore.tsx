import React from "react";
import Cards from "../_components/Cards";
import CardsScholarship from "../_components/CardsScholarship";

function Explore() {
  return (
    <>
      <div className="flex flex-col pt-20  ">
        <h1 className="text-4xl font-bold mb-8">
          Explore Universities and colleges accross the world
        </h1>
        <Cards />

        <div className="flex justify-center gap-100">
          <button className="px-7 py-6 text-lg font-bold text-gray-700 bg-white rounded-lg outline-2 outline-black hover:text-gray-900 ">
            Explore all Colleges and Universities
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center py-20">
        <h1 className="text-4xl font-bold mb-8 text-violet-700 text-sans">
          Explore Scholarship
        </h1>
        <CardsScholarship />
      </div>
    </>
  );
}

export default Explore;
