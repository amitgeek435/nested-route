import React from "react";
import { Link } from "react-router-dom";

const rterter = {
  width: "100%",
  height: 80,
  justifyContent: "start",
  display: "flex",
  alignItems: "center",
  backgroundColor: "grey",
  color: "white",
  paddingLeft: 40,
};
const pr2 = {
  paddingRight: 5,
  color: "white",
};
const Header = () => {
  return (
    <div style={rterter}>
      <Link to="/" style={pr2}>
        Home
      </Link>
      <Link to="/about" style={pr2}>
        About
      </Link>
      <Link to="/service" style={pr2}>
        Service
      </Link>
      <Link to="/contact" style={pr2}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
