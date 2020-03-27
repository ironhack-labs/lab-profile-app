import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { doLogout, doLoggedin } from "../../lib/authService";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../lib/withAuthentication";
import axios from "axios";

//provisional
let image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyGtK6cx39ZSbh-LH5aP8PJZ45HjJf05O0OA1aMF_jbZyvYkAO";
//

export const Profile = withRouter(({ history }) => {
  const [profile, setProfile] = useState();
  const [course, setCourse] = useState();
  const [campus, setCampus] = useState();

  const Profi = () => {
    doLoggedin().then(prof => setProfile(prof.username));
    doLoggedin().then(camp => setCampus(camp.campus));
    doLoggedin().then(cour => setCourse(cour.course));
  };
  useEffect(() => {
    Profi();
  }, []);

  console.log(profile);
  console.log(course);
  console.log(campus);

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
