import React from "react";

function Register() {
  return (
    <div className="mt-20">
      <br />
      <br />
      <div className="ml-10">
        <h1>Registeration of User</h1>
        <form>
          <input type="text" className="border-b-2" placeholder="Your Name" />
          <br />
          <br />
          <input type="email" className="border-b-2" placeholder="Your Email" />
          <br />
          <br />
          <input
            type="number"
            className="border-b-2"
            placeholder="Mobile Number"
          />
          <br />
          <br />
          <input
            type="text"
            className="border-b-2"
            placeholder="Your Profession"
          />
          <br />
          <br />
          <input
            type="password"
            className="border-b-2"
            placeholder="Password"
          />
          <br />
          <br />
          <input
            type="password"
            className="border-b-2"
            placeholder="Confirm Password"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
