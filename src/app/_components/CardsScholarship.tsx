"use client";
import React from "react";

function CardsScholarship() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">
            Global excellence Scholarship for International Students
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
            ipsam praesentium ab libero cumque aut voluptates, perferendis odio
            veritatis. Accusamus quidem a autem dolor, corporis non sequi sed
            quaerat.
          </p>
          <p className="font-semibold text-blue-600 py-2 pt-6 cursor-pointer">Explore More</p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://5.imimg.com/data5/NQ/VI/WY/SELLER-7262992/convocation-gown-1000x1000.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 ">
            Global excellence Scholarship for International Students
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
            ipsam praesentium ab libero cumque aut voluptates, perferendis odio
            veritatis. Accusamus quidem a autem dolor, corporis non sequi sed
            quaerat.
          </p>
          <p className="font-semibold text-blue-600 py-2 pt-6 cursor-pointer">Explore More</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1539413595691-37a09a48579b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">
            Global excellence Scholarship for International Students
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
            ipsam praesentium ab libero cumque aut voluptates, perferendis odio
            veritatis. Accusamus quidem a autem dolor, corporis non sequi sed
            quaerat.
          </p>
          <p className="font-semibold text-blue-600 py-2 pt-6 cursor-pointer">Explore More</p>
        </div>
      </div>
    </div>
  );
}

export default CardsScholarship;
