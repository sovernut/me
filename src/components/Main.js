import React from "react";
import classes from "./Main.module.css";
const Main = (props) => {
  return (
      <div className={classes.flex}>
        <div className={`${classes.name}  ${classes.col}`}><p>Nuttaphon</p></div>
        <div className={`${classes.surname}  ${classes.col}`}><p>Rodphakdeekul</p></div>
      </div>
  );
};

export default Main;
