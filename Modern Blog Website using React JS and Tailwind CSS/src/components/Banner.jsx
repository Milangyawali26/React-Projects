import React from "react";
import {FaArrowRight} from "react-icons/fa"
import { Link } from "react-router";


const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto text-white">
      <div className="text-center">
        <h1 className="text-5xl mb-5 lg:text-7xl  font-bold ">
          welcome to our blog..
        </h1>
        <p className="text-grey-100 lg:w-3/5 mx-auto mb-5">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas . we offer
          everything you nedd to get started , from helpfultips and tutorials.
        </p>
        <div >
            <Link to="/" className="font-bold text-2xl hover:text-orange-500 inline-flex items-center" >Learn More <FaArrowRight className="mt-1 ml-3"/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
