import React from "react";
import "./Navbar.css";

export const Navbar = (props) => {
  console.log(props.loggedIn);
  return (
    <div className="main">
      <h1 style={{ color: "white" }}>IPO & Currency Conversion</h1>
      {props.user && (
        <button type="button" className="logout">
          Logout
        </button>
      )}
    </div>
  );
};
