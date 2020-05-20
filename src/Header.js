import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import CastIcon from '@material-ui/icons/Cast';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: { flex: 1, textAlign: 'left' }
}));

const Header = () => {
  const classes = useStyles();
  return (
  <AppBar position='static'>
    <Toolbar>
      <Typography className={classes.typographyStyles}>Header Here</Typography>
      <CastIcon/>
    </Toolbar>
  </AppBar>
  )
}

export default Header;