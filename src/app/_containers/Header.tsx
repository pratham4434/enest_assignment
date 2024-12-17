"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

type ExploreItem = {
  id: string;
  name: string;
  location: string;
};

const sampleExploreItems: ExploreItem[] = [
  { id: "1", name: "Harvard University", location: "USA" },
  { id: "2", name: "University of Oxford", location: "UK" },
  { id: "3", name: "Stanford University", location: "USA" },
  { id: "4", name: "University of Cambridge", location: "UK" },
  { id: "5", name: "Massachusetts Institute of Technology", location: "USA" },
];

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ExploreItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Trigger shimmer effect for 0.5 seconds
    setLoading(true);

    setTimeout(() => {
      const filtered = sampleExploreItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
      setLoading(false);
    }, 500);
  };

  // Shimmer Loader Component
  const ShimmerLoader = () => (
    <ul>
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          className="p-2 animate-pulse bg-gray-300 rounded my-2 h-6"
        ></li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="flex flex-col mt-20 mx-auto">
        <div
          className="relative flex flex-col justify-center mt-10 py-14 px-8 bg-gray-900 text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('https://c1.wallpaperflare.com/path/171/422/506/academic-ancient-architecture-british-4c026bae81511f40baee17320a191d53.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "28px",
          }}
        >
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1))",
            }}
          ></div>

          <div className="relative z-10 ml-6">
            <h1 className="text-4xl font-bold mb-2">Hello Pratham</h1>
            <h2 className="text-xl font-medium mb-4">
              Start your <strong>study abroad</strong> dream journey from here
            </h2>

            <div className="flex mt-6 w-full max-w-md rounded-md overflow-hidden justify-center items-center bg-white">
              <div className="flex justify-center items-center px-2">
                <IoSearch className="text-gray-800" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search colleges, university and more"
                className="w-full p-3 text-black outline-none"
              />
              <button className="rounded-sm px-4 py-2 mr-1 bg-violet-600 text-white font-semibold hover:bg-violet-700 font-sans">
                Search
              </button>
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="mt-6 bg-gray-100 rounded-lg shadow-lg p-4 max-w-md">
                {loading ? (
                  <ShimmerLoader />
                ) : filteredItems.length > 0 ? (
                  <ul>
                    {filteredItems.map((item) => (
                      <li
                        key={item.id}
                        className="p-2 text-gray-800 border-b last:border-none hover:bg-gray-200 rounded"
                      >
                        <strong>{item.name}</strong> - {item.location}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
