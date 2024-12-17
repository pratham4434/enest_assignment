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

// Shimmer Loading Card
const ShimmerCard = () => (
  <div
    style={{
      maxWidth: "280px",
      background: "rgba(71, 71, 71, 0.38)",
      backdropFilter: "blur(15px)",
      borderRadius: "20px",
      border: "1px solid #707070",
    }}
    className="p-8 shadow-lg flex-grow flex flex-col animate-pulse"
  >
    <div className="w-3/4 h-6 bg-gray-500 rounded mb-4"></div>
    <div className="w-1/2 h-8 bg-gray-500 rounded mb-4"></div>
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="w-full h-4 bg-gray-500 rounded mb-4"></div>
    ))}
    <div className="mt-auto w-3/4 h-10 bg-gray-500 rounded"></div>
  </div>
);

const Service = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const renderFeature = (label: string) => (
    <div className="text-white text-sm flex gap-2 items-center mb-4">
      <SiTicktick className="text-green-400 text-lg" />
      {label}
    </div>
  );

  return (
    <div
      className="relative bg-[#170428] py-16 flex flex-col justify-center items-center"
      style={{ borderRadius: "38px", color: "white" }}
    >
      {/* Background Gradients */}
      <div
        className="absolute right-20 top-20"
        style={{
          width: "235px",
          height: "235px",
          background:
            "linear-gradient(180deg, rgba(29, 136, 197, 0.73) 0%, rgba(122, 29, 197, 0.73) 28.9%, rgba(196, 31, 120, 0.73) 100%)",
          filter: "blur(76.55px)",
        }}
      ></div>
      <div
        className="absolute left-20 top-40"
        style={{
          width: "200px",
          height: "200px",
          background:
            "linear-gradient(180deg, rgba(29, 136, 197, 0.73) 0%, rgba(122, 29, 197, 0.73) 28.9%, rgba(196, 31, 120, 0.73) 100%)",
          filter: "blur(76.55px)",
        }}
      ></div>

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-4">
        Service Plans
      </h2>
      <p className="text-center text-gray-300 max-w-lg mb-12">
        Explore premium service options tailored to suit your needs and goals.
      </p>

      {/* Service Cards */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => <ShimmerCard key={index} />)
          : services.map((service) => (
              <div
                key={service._id}
                style={{
                  maxWidth: "280px",
                  background: "rgba(71, 71, 71, 0.38)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "20px",
                  border: "1px solid #707070",
                }}
                className="p-8 shadow-lg flex-grow flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-medium text-white mb-2">
                  {service.name}
                </h3>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  ₹{service.fee}
                </h3>
                {renderFeature(service.feature1)}
                {renderFeature(service.feature2)}
                {renderFeature(service.feature3)}
                {renderFeature(service.feature4)}
                {renderFeature(service.feature5)}
                {renderFeature(service.feature6)}

                <button
                  style={{
                    padding: "2px",
                    background:
                      "linear-gradient(90deg, #7A1DC5 0%, #2CBDEA 57.9%, #DD1D4F 100%)",
                    borderRadius: "31px",
                    border: "none",
                  }}
                  className="mt-auto cursor-pointer"
                >
                  <div
                    style={{
                      background: "#291d34",
                      borderRadius: "31px",
                      padding: "10px 20px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    Book Consultation
                  </div>
                </button>
              </div>
            ))}
      </div>

      {/* Explore Button */}
      <button
        style={{
          padding: "2px",
          background:
            "linear-gradient(90deg, #7A1DC5 0%, #2CBDEA 57.9%, #DD1D4F 100%)",
          borderRadius: "5px",
          border: "none",
          marginTop: "40px",
        }}
        className="px-7 py-6 text-lg font-bold hover:cursor-pointer"
      >
        <div
          style={{
            background: "#170428",
            borderRadius: "5px",
            padding: "10px 20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          Explore All Services
        </div>
      </button>
    </div>
  );
};

export default Service;
