/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../global/global.css";

const NavLinks = ({ list }) => {
  const getUrl = (text) => {
    // switch (text) {
    //   case "Home": {
    //     return "";
    //   }
    //   case "Watch List": {
    //     return "/watch-list";
    //   }
    //   default: {
    //     return "";
    //   }
    // }
    console.log(text);
  };
  return (
    <div className="navLinks hidden">
      <ul className="nav-list">
        {list?.map((item) => {
          return (
            <li className="nav-links" key={item}>
              <a className="anchor" href="/watch-list">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
