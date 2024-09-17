import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 mb-16">
      <div className="w-full max-w-6xl p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-4xl text-center font-bold mb-8 text-violet-700 text-sans">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Preffered Destination"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="text"
              placeholder="Study Level"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="text"
              placeholder="When do you plan to study?"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              placeholder="How would you fund your education?"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
            Submit Your Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
