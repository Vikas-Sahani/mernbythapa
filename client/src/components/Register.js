import React, { useState } from "react";

function Register() {
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
  return (
    <div className="mt-20">
      <br />
      <br />
      <div className="ml-10">
        <h1>Registeration of User</h1>
        <form>
          <input
            type="text"
            name={inpName}
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Your Name"
          />
          <br />
          <br />
          <input
            type="email"
            name={inpName}
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Your Email"
          />
          <br />
          <br />
          <input
            type="number"
            name={inpName}
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Mobile Number"
          />
          <br />
          <br />
          <input
            type="text"
            name={inpName}
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Your Profession"
          />
          <br />
          <br />
          <input
            type="password"
            name={inpName}
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Password"
          />
          <br />
          <br />
          <input
            type="password"
            name={inpName}
            value={inpValue}
            onChange={handleInputs}
            className="border-b-2"
            placeholder="Confirm Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
