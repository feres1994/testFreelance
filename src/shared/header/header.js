import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="main-header-style">
        <div className="header-brand">
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
        </div>
        <div className="insta-plus-container">
          <p>InstaPlus</p>
        </div>
        <div className="humberger" onClick={this.props.toggleSide}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Header;
