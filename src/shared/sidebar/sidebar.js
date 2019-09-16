import React from "react";
import "./sidebar.css";
export default function Sidebar({ sideWidth }) {
  return (
    <div
      className="sidebar-container"
      style={{ width: `${sideWidth}px` }}
    ></div>
  );
}
