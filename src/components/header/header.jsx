import React from "react";
import "./header.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const coffee = state.coffee;
  return { coffee };
};

const Header = props => {
  return (
    <div className="header">
      <a href="/" className="logo-container">
        <span className="logo-text">Coffee House</span>
        <img src="./coffee-beans.png" alt="logo" className="logo-img"></img>
      </a>
      <p className="coffee-count">
        Total amount of coffee: {props.coffee.coffeeList.length}
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
