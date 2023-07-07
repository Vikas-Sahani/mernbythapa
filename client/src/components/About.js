import React, { useEffect, useState } from "react";
import vikas from "../image/PassportSize VIkas.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login"); //if user is not authentic then redirect them to login page
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div className="md:w-3/4 md:h-[500px] md:pt-10 md:mt-24 md:ml-48 md:flex justify-around shadow-black-200 tracking-wider border-black border-2 rounded-3xl shadow-lg shadow-indigo-500/40">
      <form method="GET">
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
            <p>{userData.name}</p>
            <p>Website GitHub MERN Dev</p>
            <p>Figma</p>
            <p>{userData.work}</p>
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
                  <span>{userData._id}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span>Name</span>
                  <span>{userData.name}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span>Email</span>
                  <span>{userData.email}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span>Phone</span>
                  <span>{userData.phone}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span>Profession</span>
                  <span>{userData.work}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
