import React from "react";
import { Link } from "react-router-dom";

export const ButtonItem = props => {
  return (
    <Link className="button" to={props.whereTo}>
      {props.children}
    </Link>
  );
};
