import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

function Sidebar({ user }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <ListItem>
        <p>{user}</p>
      </ListItem>
      <List>
        <Link className="text-dark" to="/dashboard">
          <ListItem button>
            <ListItemIcon>
              <MenuBookOutlinedIcon />
            </ListItemIcon>
            My Books
          </ListItem>
        </Link>
        <Divider />
        <Link className="text-dark" to="/add">
          <ListItem button>
            <ListItemIcon>
              <AddShoppingCartOutlinedIcon />
            </ListItemIcon>
            Add Wish Book
          </ListItem>
        </Link>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <StarsOutlinedIcon />
          </ListItemIcon>
          <Link className="text-dark" to="">
            Bestsellers
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <i className="fas fa-glasses ml-1"></i>
          </ListItemIcon>
          <Link className="text-dark" to="/">
            E-Reader
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <Fab
        className="m-5"
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          zIndex: '1000'
        }}
        onClick={toggleDrawer('left', true)}
        size="large"
      >
        <MenuOpenRoundedIcon fontSize="large" />
      </Fab>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  user: PropTypes.string
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {})(Sidebar);
