import React from "react";
import { Link } from "react-router-dom";
import { Col2 } from "../../public/styles/Common.styles";

export const ProfilePage = () => {
  return (
    <Col2>
      <div className="left">
        <h1>Profile</h1>

        <Link to="/signup">Logout</Link>
      </div>
      <div className="right">
        <p>Cosas cosas cosas cosas</p>
        <button className="button">Editar Profile</button>
      </div>
    </Col2>
  );
};
