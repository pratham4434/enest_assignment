"use client";
import React from "react";

function CardsBlogs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://wallpapercave.com/wp/wp10055696.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">University of California</p>
          <h3 className="text-xl font-bold mb-2">
            MSc in Agricultural Production and Food Services{" "}
          </h3>
          <p className="text-sm text-gray-600">Berkeley, USA</p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://wallpapercave.com/wp/wp10055696.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">University of California</p>
          <h3 className="text-xl font-bold mb-2">
            MSc in Agricultural Production and Food Services{" "}
          </h3>
          <p className="text-sm text-gray-600">Berkeley, USA</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://wallpapercave.com/wp/wp10055696.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">University of California</p>
          <h3 className="text-xl font-bold mb-2">
            MSc in Agricultural Production and Food Services{" "}
          </h3>
          <p className="text-sm text-gray-600">Berkeley, USA</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://wallpapercave.com/wp/wp10055696.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">University of California</p>
          <h3 className="text-xl font-bold mb-2">
            MSc in Agricultural Production and Food Services{" "}
          </h3>
          <p className="text-sm text-gray-600">Berkeley, USA</p>
        </div>
      </div>
      
    </div>
  );
}

export default CardsBlogs;
