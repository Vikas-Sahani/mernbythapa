import React, { useEffect } from "react";
import vikas from "../image/PassportSize VIkas.png";

function About() {
  const callAboutPage = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div className="md:w-3/4 md:h-[500px] md:pt-10 md:mt-24 md:ml-48 md:flex justify-around shadow-black-200 tracking-wider border-black border-2 rounded-3xl shadow-lg shadow-indigo-500/40">
      <div className="md:h-80 flex flex-col justify-between ">
        {/* image */}
        <div className="w-28 h-32 flex justify-center">
          <img
            src={vikas}
            alt="Profile"
            className="shadow-xl hover:shadow-2xl shadow-sky-950 rounded-lg bg-blue-800 text-center"
          />
        </div>
        {/* description */}
        <div className="">
          <p>YouTuber</p>
          <p>Instagram</p>
          <p>Vikas</p>
          <p>Website GitHub MERN Dev</p>
          <p>Figma</p>
          <p>Software Engeeneer</p>
        </div>
      </div>

      <div className="">
        <div className="flex flex-row justify-between md:w-96 md:h-48">
          <div className="font-bold">
            <h4 className="text-3xl ">Vikas</h4>
            <p className="text-xl text-sky-600">web Developer</p>
            <p>Ranking: 1/10</p>
          </div>
          <button className="shadow-md hover:shadow-2xl shadow-green-700 bg-gray-800 rounded-xl w-28 h-12 font-bold text-white">
            Edit Profile
          </button>
        </div>

        <div>
          <div>
            <div className="grid grid-cols-3 font-bold text-xl">
              <h3 className="decoration-blue-800 decoration-2 underline">
                About
              </h3>
              <h3 className="text-blue-600 ">TimeLine</h3>
            </div>
            <hr className="border-3 border-black" />
            <div className="mt-5">
              <p className="grid grid-cols-2 ">
                <span>User ID</span>
                <span>787888878877789</span>
              </p>
              <p className="grid grid-cols-2">
                <span>Name</span>
                <span>Vikas</span>{" "}
              </p>
              <p className="grid grid-cols-2">
                <span>Email</span>
                <span>vk@gmail.com</span>
              </p>
              <p className="grid grid-cols-2">
                <span>Phone</span>
                <span>7894561302</span>
              </p>
              <p className="grid grid-cols-2">
                <span>Profession</span>
                <span>web Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
