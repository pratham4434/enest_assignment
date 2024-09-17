import React from "react";
import { IoSearch } from "react-icons/io5";
function Header() {
  return (
    <>
      <div className="flex flex-col  mx-auto">
        <div 
          className="relative flex flex-col justify-center mt-10 py-14 px-8 bg-gray-900 text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('https://c1.wallpaperflare.com/path/171/422/506/academic-ancient-architecture-british-4c026bae81511f40baee17320a191d53.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: '28px' 
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
            <h1 className="text-4xl font-bold mb-2">Hello Sindhu!</h1>
            <h2 className="text-xl font-medium mb-4">
              Start your <strong>study abroad</strong> dream journey from here
            </h2>

            <div className="flex mt-6 w-full max-w-md rounded-md overflow-hidden justify-center items-center bg-white">
              <div className="flex justify-center items-center px-2">
                <IoSearch className="text-gray-800 " />
              </div>
              <input
                type="text"
                placeholder="Search colleges, university and more"
                className="w-full  p-3 text-black outline-none"
              />
              <button className=" rounded-sm px-4 py-2 mr-1 bg-violet-600 text-white font-semibold hover:bg-violet-700 font-sans">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
