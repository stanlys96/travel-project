import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Style from "style-it";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '7.5vh'
  },
  title: {
    flexGrow: 1,
  },
  navWidth: {
    minWidth: 1200,
    margin: '0 auto'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
}));

function Navbar() {
  const classes = useStyles();

  return Style.it(`
      .myLink {
        color: #fff;
        text-decoration: none;
      }
      
      .myLink::hover {
        text-decoration: none;
        color: #fff;
      }
    `,
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navWidth}>
          <Typography variant="h6" className={classes.title}>
            <i class="fas fa-laugh-beam"></i> Paradise Contriver
          </Typography>
          <Button color="inherit"><NavLink className="myLink" to="/"><i class="fas fa-home"></i> Home</NavLink></Button>
          <Button color="inherit"><NavLink className="myLink" to="/login"><i class="fas fa-sign-in-alt"></i> Login</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;