import React from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

export default function RouterPage() {
  return (
    <div className="router">
      <Navbar />
      {/* <Header /> */}
      <Home />
    </div>
  );
}
