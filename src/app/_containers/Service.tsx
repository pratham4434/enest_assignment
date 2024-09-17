"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Service = {
  _id: string;
  name: string;
  feature1: string;
  feature2: string;
  feature3: string;
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
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Service Plan
        </h2>
        <p className="text-sm text-white text-center mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
          ipsam praesentium <br />
          ab libero cumque aut voluptates, quaerat.
        </p>
        <div className="flex gap-6 justify-center items-center">
          {services.map((service) => (
            <div
              key={service._id}
              className="glassmorphic-card p-8 shadow-lg min-w-[200px] max-w-[300px] min-h-[450px] flex flex-col items-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.name}
              </h3>
              <div className="text-white mb-4">{service.feature1}</div>
              <div className="text-white mb-4">{service.feature2}</div>
              <div className="text-white mb-4">{service.feature3}</div>
              <button className="bg-violet-950 text-white px-4 py-2 rounded-lg hover:bg-violet-600">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-12 px-7 py-6 text-lg font-bold text-white bg-violet-950 rounded-lg outline-4 outline-black hover:text-gray-200 ">
        Explore all Colleges and Universities
      </button>
    </div>
  );
};

export default Service;
