import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white flex ">
      <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4  ">
        <div>
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
          
          {/* category */}
            <div>
              <p className="font-medium tracking-wider text-gray-300">
                category
              </p>
              <ul className="mt-2 space-y-2 ">
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">News</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">World</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Games</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Prefernces</a>
                </li>
              </ul>
            </div>

{/* Apples */}
            <div>
              <p className="font-medium tracking-wider text-gray-300">
                Apples
              </p>
              <ul className="mt-2 space-y-2 ">
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Web</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">eCommerce</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Business</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Entertainment</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Portfolio</a>
                </li>
              </ul>
            </div>

{/* Cherry */}
            <div>
              <p className="font-medium tracking-wider text-gray-300">
                Cherry
              </p>
              <ul className="mt-2 space-y-2 ">
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Media</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Non-Profit</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Projects</a>
                </li>
                <li  className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Education</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
