import React from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '@geist-ui/react';
import FileText from '@geist-ui/react-icons/fileText';

import classes from './Main.module.css';

const Main = (props) => {
  const history = useHistory();

  function goResume() {
    history.push("/me/resume");
  }

  return (
    <div className={classes.root}>
      <div className={classes.flexColumn}>
        <div className={classes.flex}>
          <div className={`${classes.name}  ${classes.col}`}>
            <p>Nuttaphon</p>
          </div>
          <div className={`${classes.surname}  ${classes.col}`}>
            <p>Rodphakdeekul</p>
          </div>
        </div>
        <Button
          className={classes.buttonFadeIn}
          type="success"
          shadow
          auto
          scale={1.5}
          width="100%"
          icon={<FileText />}
          onClick={goResume}
        >
          RESUME
        </Button>
      </div>
    </div>
  );
};

export default Main;
