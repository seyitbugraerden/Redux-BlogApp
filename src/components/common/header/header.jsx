import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5bfa2f97460951.5ec57c2734a00.jpg"
        alt=""
      />
      <div className="text-area">
        <h1>Cornflakes and milk</h1>
        <ul>
          <li>read</li>
          <li className="dot"></li>
          <li>write</li>
          <li className="dot"></li>
          <li>eat</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
