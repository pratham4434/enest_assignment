import React from "react";

const Service = () => {
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
          {/* Card */}
          <div className="glassmorphic-card p-8 shadow-lg min-w-[200px] max-w-[300px] min-h-[450px] flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Service Title
            </h3>
            <div className="text-white mb-4">
              <p className="text-sm mb-1">First short description goes here.</p>
              <p className="text-sm mb-1">
                Second short description goes here.
              </p>
              <p className="text-sm mb-1">Third short description goes here.</p>
              <p className="text-sm mb-1">
                Fourth short description goes here.
              </p>
            </div>
            <button className="bg-violet-950 text-white px-4 py-2 rounded-lg hover:bg-violet-600">
              Book Consultation
            </button>
          </div>
          <div className="glassmorphic-card p-8 shadow-lg min-w-[200px] max-w-[300px] min-h-[500px] flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Service Title
            </h3>
            <div className="text-white mb-4">
              <p className="text-sm mb-1">First short description goes here.</p>
              <p className="text-sm mb-1">
                Second short description goes here.
              </p>
              <p className="text-sm mb-1">Third short description goes here.</p>
              <p className="text-sm mb-1">
                Fourth short description goes here.
              </p>
            </div>
            <button className="bg-violet-800 text-white px-4 py-2 rounded-lg hover:bg-violet-600">
              Book Consultation
            </button>
          </div>
          <div className="glassmorphic-card p-8 shadow-lg min-w-[200px] max-w-[300px] min-h-[450px] flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Service Title
            </h3>
            <div className="text-white mb-4">
              <p className="text-sm mb-1">First short description goes here.</p>
              <p className="text-sm mb-1">
                Second short description goes here.
              </p>
              <p className="text-sm mb-1">Third short description goes here.</p>
              <p className="text-sm mb-1">
                Fourth short description goes here.
              </p>
            </div>
            <button className="bg-violet-950 text-white px-4 py-2 rounded-lg hover:bg-violet-600">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      
      <button className="mt-12 px-7 py-6 text-lg font-bold text-white bg-violet-950 rounded-lg outline-4 outline-black hover:text-gray-200 ">
        Explore all Colleges and Universities
      </button>
    </div>
  );
};

export default Service;
