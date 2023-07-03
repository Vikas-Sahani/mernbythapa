import React from "react";

function Login() {
  return (
    <div className="mt-20">
      <div className="ml-10">
        <h1>Login</h1>
        <form>
          <br />
          <input type="Email" placeholder="Your Email" className="border-b-2" />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2"
          />
          <br />
          <br />
          <button className="bg-blue-700 text-white rounded-full w-20">
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
