import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  debugger
  return (
    <header className={classes.header}>
      <img src="https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?t=st=1647965007~exp=1647965607~hmac=3ca730c26cd431a1131f7eb71e9d9ce8b67aade6826066bc72ac46e97f1d63b3&w=1060" />

      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
