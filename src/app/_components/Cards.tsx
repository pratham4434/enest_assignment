"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type University = {
  _id: string;
  name: string;
  location: string;
  ranking: number;
  imageUrl: string;
};

function Cards() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch universities
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("/api/universities");
        setUniversities(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching universities:", err);
        setError("Failed to fetch universities");
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // Shimmer/Skeleton Loader Component
  const ShimmerCard = () => (
    <div className="bg-gray-200 animate-pulse rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 hover:">
      {/* Shimmer Effect while loading */}
      {loading
        ? Array.from({ length: 8 }).map((_, index) => <ShimmerCard key={index} />)
        : universities.map((university) => (
            <div
              key={university._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={
                  university.imageUrl ||
                  "https://wallpapercave.com/wp/wp10055696.jpg"
                }
                alt={university.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-1">
                  Ranked #{university.ranking}
                </p>
                <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                <p className="text-sm text-gray-600">{university.location}</p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Cards;
