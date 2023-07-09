import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  //promises
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/logout", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1> Logout page</h1>
    </div>
  );
}

export default Logout;
