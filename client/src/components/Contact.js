import React, { useEffect, useState } from "react";
import vikas from "../image/PassportSize VIkas.png";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const userContactUs = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
    userContactUs();
  }, []);
  return (
    <div className="md:mt-24">
      <div className="grid grid-cols-3 gap-10 md:mx-16 tracking-wider">
        {/* phone Number */}
        <div className="border-2 border-green-500  rounded-2xl md:p-5 flex justify-start shadow-lg shadow-green-300/40">
          <div>
            <img
              src="https://img.icons8.com/office/24/000000/iphone.png"
              alt="phone"
            />
          </div>
          <div className="md:ml-5">
            <h4>Phone</h4>
            <p>1234567890</p>
          </div>
        </div>

        {/* Email Number */}
        <div className="border-2 border-red-500  rounded-2xl md:p-5 flex justify-start shadow-lg shadow-red-300/40">
          <div>
            <img
              src="https://img.icons8.com/office/24/000000/email.png"
              alt="email"
            />
          </div>
          <div className="md:ml-5">
            <h4>Email</h4>
            <p>abc@gamil.com</p>
          </div>
        </div>

        {/* Address Number */}
        <div className="border-2 border-blue-500  rounded-2xl md:p-5 flex justify-start shadow-lg shadow-blue-300/40">
          <div>
            <img
              src="https://img.icons8.com/office/24/000000/address.png"
              alt="Address"
            />
          </div>
          <div className="md:ml-5">
            <h4>Address</h4>
            <p>Delhi, India</p>
          </div>
        </div>
      </div>
      <form
        method="GET"
        className="md:w-3/4 md:h-[400px] md:pt-5 md:ml-48  md:mt-10  tracking-wider border-black border-2 rounded-3xl shadow-lg shadow-indigo-500/40"
      >
        <h3 className="text-3xl font-semibold text-center">Get in Touch</h3>
        <div className="flex flex-col items-center">
          <div className="w-full  my-10 flex justify-around">
            <input
              type="name"
              value={userData.name}
              placeholder="Your Name"
              className="border-2 border-black rounded-xl text-center shadow-lg shadow-indigo-900/40"
            />
            <input
              type="email"
              value={userData.email}
              placeholder="Your Email"
              className="border-2 border-black rounded-xl text-center shadow-lg shadow-indigo-900/40"
            />
            <input
              type="phone"
              value={userData.phone}
              placeholder="Your Phone"
              className="border-2 border-black rounded-xl text-center shadow-lg shadow-indigo-900/40"
            />
          </div>
          <textarea
            placeholder="witer here your message..."
            className="border-2 w-2/3 rounded-lg border-black md:h-36 shadow-lg shadow-indigo-900/40"
          ></textarea>
          <input
            type="submit"
            className="w-24 text-sm rounded-full text-cyan-200 bg-cyan-800 mt-7 p-2 hover:text-cyan-800 hover:bg-cyan-200 font-bold"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
