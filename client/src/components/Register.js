import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const inputFeilds = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      name: "phone",
      type: "number",
      placeholder: "Mobile Number",
    },
    {
      name: "work",
      type: "text",
      placeholder: "Your Profession",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Your Password",
    },
    {
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

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
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json(); // 11.50-> pending status dikhhti, so we don't see pending status so we have used this

    if (data.status === 422 || !data) {
      //12.40
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration successful");
      console.log("Registration successful");
      navigate("/login"); //v5 has history -> 14.00
    }
  };

  return (
    <div className="mt-40 flex justify-center">
      <br />
      <br />
      <div className="ml-10">
        <h1 className="text-6xl mb-10">Registeration of User</h1>
        <form method="POST">
          {inputFeilds.map((inp) => {
            return (
              <>
                <input
                  type={inp.type}
                  name={inp.name}
                  placeholder={inp.placeholder}
                  value={inpValue}
                  onChange={handleInputs}
                  className="border-b-2"
                />
                <br />
                <br />
              </>
            );
          })}

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
