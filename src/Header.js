import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: { flex: 1, textAlign: 'left' }
}));

const Header = () => {
  const classes = useStyles();
  console.log('rendering Header component')
  return (
  <AppBar position='static'>
    <Toolbar>
      <Typography className={classes.typographyStyles}>SivaDeals</Typography>
      <ShoppingCartIcon/>
    </Toolbar>
  </AppBar>
  )
}

export default Header;