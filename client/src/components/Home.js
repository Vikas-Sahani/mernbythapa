import React, { useEffect, useState } from "react";

function Home() {
  const [username, setUserNme] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserNme(data.name);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <div className="mt-20 flex justify-center flex-col text-center text-7xl">
      <p className="m-5 text-5xl">Welcome</p>
      <h1 className="m-5">{username}</h1>
      <h1>{show ? "happy to see you back" : "We are the Mern Developer"}</h1>
    </div>
  );
}

export default Home;
