import React from "react";
import "./Gender.css";

export default function Gender() {
  return (
    <div className="gender-container">
      <select>
        <option value="">Genders</option>
        <option value="Assam">Transmission</option>
        <option value="Bihar">Nationality</option>
      </select>
    </div>
  );
}
