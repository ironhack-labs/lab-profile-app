import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doLogout, whoami } from "../../lib/authService";
import { withRouter } from "react-router-dom";
import axios from "axios";

//provisional
let username = "PEPITO";
let campus = "Sao Paulo";
let course = "Web Development";
let image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyGtK6cx39ZSbh-LH5aP8PJZ45HjJf05O0OA1aMF_jbZyvYkAO";
//

export const Profile = withRouter(({ history }) => {
  const [profile, setProfile] = useState();

  const Profi = () => whoami().then(prof => setProfile(prof));

  useEffect(() => {
    Profi();
  }, []);

  console.log(profile);

  const handleClick = async () => {
    await doLogout();
    await history.push("/");
  };
  return (
    <>
      <div>
        <h1>Profile</h1>
        <form>
          <div>
            <label>Username</label>
            <input value={profile}></input>
          </div>
          <div>
            <label>Campus</label>
            <input value={campus}></input>
          </div>
          <div>
            <label>Course</label>
            <input value={course}></input>
          </div>
        </form>
        <Link onClick={handleClick}>Logout</Link>
      </div>
      <div>
        <img src={image}></img>
        <button>Edit photo</button>
        <p>
          the user is able to upload a new profile photo, using NodeJS and
          Multer uploader.
        </p>
      </div>
    </>
  );
});
