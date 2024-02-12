import React from "react";
import avatar from "../../../assets/img/avatar.jpg";
import "./PsrsonelCard.css";

function PersonCard() {
  return (
    <div className="container">
      <img src={avatar} alt="" className="avatar_img" />
    </div>
  );
}

export default PersonCard;
