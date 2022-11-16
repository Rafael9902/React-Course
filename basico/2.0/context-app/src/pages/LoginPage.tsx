import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div>LoginPage</div>

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
