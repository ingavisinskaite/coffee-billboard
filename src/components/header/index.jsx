import React from "react";
import "./style.scss";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const coffeeList = state.coffee;
  return { coffeeList };
};

const Header = props => {
  return (
    <div className="header">
      <div>
        <span className="logo-text">Cofee House</span>
        <img src="./coffee-beans.png" alt="logo" className="logo-img"></img>
      </div>
      <p className="coffee-count">
        Total amount of coffe: {props.coffeeList.length}
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
