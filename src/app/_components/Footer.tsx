"use client"
import React from "react";
import logo from "../../app/assets/enest.png";
import logofooter1 from "../../app/assets/footerlogo.png";
import logofooter2 from "../../app/assets/footerlogo2.png";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex flex-col space-y-4 justify-center items-center">
          <Image src={logo} alt="Logo" width={60} height={60} />
            <span className="text-4xl font-sans font-semibold text-violet-600">
              E-NEST
            </span>
            <h2 className="text-md font-medium text-center">Empowering Agri and Food Technology</h2>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <a href="#" className="hover:text-gray-400">
              Program
            </a>
            <a href="#" className="hover:text-gray-400">
              Test Series
            </a>
            <a href="#" className="hover:text-gray-400">
              Skill Connect
            </a>
            <a href="#" className="hover:text-gray-400">
              Expert Connect
            </a>
            <a href="#" className="hover:text-gray-400">
              Study Abroad
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Why Choose Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Policies
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Security</h3>
            <a href="#" className="hover:text-gray-400">
              Report
            </a>
            <a href="#" className="hover:text-gray-400">
              Trademark Notice
            </a>
            <a href="#" className="hover:text-gray-400">
              Advertise with us
            </a>
            <a href="#" className="hover:text-gray-400">
              Help & Support
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">Incubated by</h2>
            <Image src={logofooter1} alt="Logo" width={150} height={150} />
            <Image src={logofooter2} alt="Logo" width={150} height={150} />

          </div>
        </div>

        {/* Bottom Section (optional) */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; 2024 AgriVision4U Pvt. Ltd. 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
