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

  if (loading)
    return <h3 className="text-xl text-center font-bold mb-10">Loading...</h3>;
  if (error) return <p>{error}</p>;
  console.log(universities);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {universities.map((university) => (
        <div
          key={university._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
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
