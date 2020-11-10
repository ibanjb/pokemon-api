import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    minWidth: '100%',
    textAlign: 'center'
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <img src="https://cdn.dribbble.com/users/283669/screenshots/2851144/gogogo.gif" alt="loading" />
    </div>
  );
}

export default Loading;
