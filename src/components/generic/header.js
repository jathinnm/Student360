import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
  title: {
    textShadow: #EEEE00 0 0 10px;
  }
});


class Header extends React.Component {
  render() {

      return (
        <AppBar position="static">
          <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className = {{title: classes.title}}>
            Style My Space
          </Typography>
          </Toolbar>
        </AppBar>
      );

  }
}
export default Header;
