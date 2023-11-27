import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Help from "./Help";

const Layout = () => {
  let isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data != null) {
      return true;
    } else {
      return false;
    }
  };
  let navigate = useNavigate("");
  if (isLoggedIn()) {
    return (
      <div>
        <nav>
          <Help />
          <Link to="">Home</Link>
          <Link to="profile">Profile</Link>
        </nav>
        <hr />

        <Outlet />
      </div>
    );
  } else {
    return navigate("/");
  }
};

export default Layout;
