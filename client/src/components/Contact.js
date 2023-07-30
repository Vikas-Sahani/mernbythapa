import React, { useEffect, useState } from "react";

function Contact() {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });

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
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContactUs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  //send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    console.log("button cliced & msg is :- ", message);

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (!data) {
      console.log("message not send ");
    } else {
      alert("Message Send ");
      setUserData({ ...userData, message: "" }); // after sending the message to db our msg should be empty
    }
  };

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
        method="POST"
        className="md:w-3/4 md:h-[400px] md:pt-5 md:ml-48  md:mt-10  tracking-wider border-black border-2 rounded-3xl shadow-lg shadow-indigo-500/40"
      >
        <h3 className="text-3xl font-semibold text-center">Get in Touch</h3>
        <div className="flex flex-col items-center">
          <div className="w-full  my-10 flex justify-around">
            <input
              type="name"
              onChange={handleInputs}
              name="name"
              value={userData.name}
              placeholder="Your Name"
              className="border-2 border-black rounded-xl text-center shadow-lg shadow-indigo-900/40"
            />
            <input
              type="email"
              onChange={handleInputs}
              name="email"
              value={userData.email}
              placeholder="Your Email"
              className="border-2 border-black rounded-xl text-center shadow-lg shadow-indigo-900/40"
            />
            <input
              type="phone"
              onChange={handleInputs}
              name="phone"
              value={userData.phone}
              placeholder="Your Phone"
              className="border-2 border-black rounded-xl text-center shadow-lg shadow-indigo-900/40"
            />
          </div>
          <textarea
            onChange={handleInputs}
            name="message"
            value={userData.message}
            placeholder="witer here your message..."
            className="border-2 w-2/3 rounded-lg border-black md:h-36 shadow-lg shadow-indigo-900/40"
          ></textarea>
          <button
            onClick={contactForm}
            className="w-24 text-sm rounded-full text-cyan-200 bg-cyan-800 mt-7 p-2 hover:text-cyan-800 hover:bg-cyan-200 font-bold"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
