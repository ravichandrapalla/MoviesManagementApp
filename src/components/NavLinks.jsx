/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../global/global.css";

const NavLinks = ({ list }) => {
  return (
    <div className="navLinks hidden">
      <ul className="nav-list">
        {list?.map((item) => {
          return (
            <li className="nav-links" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
