import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  console.log(user);

  let inpName, inpValue;

  const handleInputs = (e) => {
    inpName = e.target.name;
    inpValue = e.target.value;

    setUser({ ...user, [inpName]: inpValue });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json(); // 11.50-> pending status dikhhti, so we don't see pending status so we have used this

    if (data.status === 422 || !data) {
      //12.40
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration successful");
      console.log("Registration successful");
      navigate("/login"); //14.00
    }
  };

  return (
    <div className="mt-20">
      <br />
      <br />
      <div className="ml-10">
        <h1>Registeration of User</h1>
        <form method="POST">
          {console.log(inpName)}
          <input
            type="text"
            name="name"
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Your Name"
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Your Email"
          />
          <br />
          <br />
          <input
            type="number"
            name="phone"
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Mobile Number"
          />
          <br />
          <br />
          <input
            type="text"
            name="work"
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Your Profession"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Password"
          />
          <br />
          <br />
          <input
            type="password"
            name="cpassword"
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Confirm Password"
          />
          <br /> <br />
          <button
            onClick={PostData}
            className="bg-blue-800 text-blue-50 w-20 p-2 rounded-full hover:bg-black duration-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
