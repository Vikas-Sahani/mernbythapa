import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
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
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json(); // 11.50-> pending status dikhhti, so we don't see pending status so we have used this

    if (data.status === 400 || !data) {
      window.alert("Invalid Login");
      console.log("Invalid Login");
    } else {
      window.alert(" Login successful");
      console.log("Login successful");
      navigate("/"); //redirecting to home page
    }
  };
  return (
    <div className="mt-20">
      <br />
      <div className="ml-10">
        <h1>Login</h1>
        <form method="POST">
          <br />
          <input
            type="email"
            name="email"
            onChange={handleInputs}
            placeholder="Your Email"
            className="border-b-2"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            onChange={handleInputs}
            placeholder="Password"
            className="border-b-2"
          />
          <br />
          <br />
          <button
            onClick={PostData}
            className="bg-blue-700 text-white rounded-full w-20"
          >
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
