import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/context/Context";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? <h1>{user.username}</h1> : <h1>IronProfile</h1>}
      <p>
        Today we will create an app with authoritation, adding some cool syles
      </p>
      <div>
        <Link className="button" To="/signup">
          Regístrate
        </Link>
        <Link className="button" To="/login">
          Iniciar Sesión
        </Link>
      </div>
    </>
  );
};
