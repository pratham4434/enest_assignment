"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiTicktick } from "react-icons/si";

type Service = {
  _id: string;
  name: string;
  fee: number;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  feature6: string;
};

const Service = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        console.log(response);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ borderRadius: "38px" }}
      className="relative bg-[#1d0532] py-16 flex flex-col justify-center items-center"
    >
      {/* Content */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Service Plan
        </h2>
        <p className="text-sm md:text-base text-white text-center mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
          ipsam praesentium
          <br className="hidden sm:inline-block" /> ab libero cumque aut
          voluptates, quaerat.
        </p>

        {/* Service Cards Section */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {services.map((service) => (
            <div
              key={service._id}
              className="glassmorphic-card p-6 sm:p-8 lg:p-10 shadow-lg min-w-[200px] max-w-[280px] flex-grow flex flex-col rounded-lg bg-opacity-50"
            >
              <h3 className="text-2xl md:text-2xl font-medium text-white mb-4">
                {service.name}
              </h3>
              <h3 className="text-3xl font-semibold text-white mb-4">
                <div className="text-white mb-4">₹{service.fee}</div>
              </h3>

              <div className="text-white text-sm flex gap-2 items-center mb-4">
                <SiTicktick className="text-gray-600 text-lg" />
                {service.feature1}
              </div>
              <div className="text-white text-sm flex gap-2 items-center mb-4">
                <SiTicktick className="text-gray-600 text-lg" />
                {service.feature2}
              </div>
              <div className="text-white text-sm flex gap-2 items-center mb-4">
                <SiTicktick className="text-gray-600 text-lg" />
                {service.feature3}
              </div>
              <div className="text-white text-sm flex gap-2 items-center mb-4">
                <SiTicktick className="text-gray-600 text-lg" />
                {service.feature4}
              </div>
              <div className="text-white text-sm flex gap-2 items-center mb-4">
                <SiTicktick className="text-gray-600 text-lg" />
                {service.feature5}
              </div>
              <div className="text-white text-sm flex gap-2 items-center mb-4">
                <SiTicktick className="text-gray-600 text-lg" />
                {service.feature6}
              </div>

              <button className="mt-auto bg-violet-950 text-white px-4 py-2 rounded-lg hover:bg-violet-600">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Button */}
      <button className="mt-12 px-7 py-6 text-lg font-bold text-white bg-violet-950 rounded-lg hover:text-gray-200 hover:bg-violet-700">
        Explore all Colleges and Universities
      </button>
    </div>
  );
};

export default Service;
