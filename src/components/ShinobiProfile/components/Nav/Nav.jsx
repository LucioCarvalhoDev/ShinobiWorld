import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="Nav">
      <ul>
        {props.pages.map((page, id) => {
          return (
            <li
              key={id}
              onClick={() => {
                props.setter(id);
              }}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
