import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {
        <div>
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <button>
            <Link to={"/content/signup"}>Signup</Link>
          </button>
        </div>
      }
    </div>
  );
};

export default Home;
