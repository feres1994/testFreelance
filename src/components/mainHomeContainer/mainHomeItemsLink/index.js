import React from "react";
import { Link } from "react-router-dom";
import "../mainHome.css";
export default function MainItems(props) {
  const { data, sm } = props;
  const keyMod = sm % 2 !== 0;
  return (
    <div className="col-md-6 col-sm-12">
      <div
        className="menu-item-contain"
        style={
          keyMod
            ? { justifyContent: "flex-start" }
            : { justifyContent: "flex-end" }
        }
      >
        <div className="menu-item">
          <Link to={data.link}>
            <p>{data.context}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
