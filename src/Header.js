import React, {useState} from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
  typographyStyles: { flex: 1, textAlign: 'left' },
  popoverContent: { padding: '10px' }
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  console.log('rendering Header component')
  return (
  <AppBar position='static'>
    <Toolbar>
      <Typography className={classes.typographyStyles}>SivaDeals</Typography>
      
        <div>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        <ShoppingCartIcon/>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.popoverContent}><Cart/></Typography>
        </Popover>
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default Header;