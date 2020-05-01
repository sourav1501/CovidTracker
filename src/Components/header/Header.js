import React from "react";
import Selector from "../selector/Selector";
import DatePick from "../datePick/DatePick";
import Gender from "../gender/Gender";

import "./Header.css";

export default function Header() {
  return (
    <div className="header-container flex-container">
      <div className="flex-container">
        <Selector />
        <DatePick />
      </div>
      <div className="flex-container">
        <div className="radio-button flex-container">
          <div className="female flex-container">
            <div class="circle is-female "></div>
            <h5>Female</h5>
          </div>
          <div className="male flex-container">
            <div class="circle is-male"></div>
            <h5>Male</h5>
          </div>
          <div className="unknown flex-container">
            <div class="circle is-unknown"></div>
            <h5>Unknown</h5>
          </div>
        </div>
        <Gender />
      </div>
    </div>
  );
}