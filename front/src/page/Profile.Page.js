import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Col2 } from "../../public/styles/Common.styles";
import { doLogout } from "../services/authServices";
import { ApiContext } from "../context/Context";
import imgProfile from "../../public/images/user-placeholder.png";

export const ProfilePage = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const onClickLogout = async () => {
    await doLogout();
    setUser("null");
    history.push("/");
  };

  return (
    <Col2>
      <div className="left">
        <h1>Profile</h1>

        {user && <p>{user.username}</p>}
        {user && <p>{user.campus}</p>}
        {user && <p>{user.course}</p>}

        <button className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <div className="right">
        <div className="box-img">
          <img src={imgProfile} />
        </div>
        <p>Si quieres editar tus campos da al siguiente botón</p>
        <button className="button">Editar Profile</button>
      </div>
    </Col2>
  );
});
