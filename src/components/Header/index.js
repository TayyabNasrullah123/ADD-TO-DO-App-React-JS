import React from "react";
import { Link } from "react-router-dom";
import {Header} from "./header.style"
export default () => {
  return (
    <Header>
      <nav className="nav">
        <a>
          <Link to="/" style={{color: 'white', paddingLeft: 5, fontSize: "1.5rem"}}>Home</Link>
        </a>

        <ul className="list-style">
          <li>
            <a>
              <Link to="/add-card" style={{color: 'white', fontSize: "1.5rem"}}>Add Card</Link>
            </a>
          </li>
        </ul>
      </nav>
    </Header>
  );
};
