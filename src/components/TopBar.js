import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import config from '../modules/ticketing/views/config.json';
import { Link, Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  fade,
  Tooltip
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from 'src/modules/dashboard-360/components/Logo';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setLoggedIn, setSearchDistributor } from 'src/redux/action';
import { connect } from 'react-redux';
import Axios from 'axios';
import {
  UPDATE_CURRENT_STATUS
} from '../modules/dashboard-360/utils/endpoints'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 500,
    marginRight: 15,
    fontSize: '0.96rem',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  inputRoot: {
    color: 'white'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '30ch'
      }
    }
  }
}));

// var APIENDPOINT = SOCKETENDPOINT2;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// addToQueue start //////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// removeFromQueue end //////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function updateAgentCallStatusV2(callStatusId, data) {
  // console.log("updateData", updateData)
  var axios = require('axios');
  var config = {
    method: 'put',
    url: UPDATE_CURRENT_STATUS + callStatusId,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      console.log('update', JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const TopBar = ({
  className,
  onMobileNavOpen,
  logout,
  searchDist,
  ...rest
}) => {
  const user_Details = useSelector(state => state.userData)


  const classes = useStyles();
  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  async function logoutUser() {


    localStorage.clear();
    window.location.reload()

  }
  var test = "green"
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <AssignmentIndIcon />
          </Badge>
        </IconButton>
        <Link to="/dailyreport" className="color-black"> Date filter</Link>
      </MenuItem> */}
      <MenuItem></MenuItem>
      <MenuItem onClick={() => logoutUser()}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"

        >
          <ExitToAppIcon />
        </IconButton>
        <p>logout</p>
      </MenuItem>
    </Menu>
  );

  return (<div>
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest} style={{ background: 'blue' }}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>

        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search???"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={updateSearchText}
            value={searchText}
            onBlur={distributorID}
          />
        </div> */}
        <Box flexGrow={1} />
        <Hidden mdDown>
          {/* <Typography>
            <Link to="/dailyreport" className="color-white">
              <Badge color="secondary">
                <AssignmentIndIcon />
              </Badge> Date filter
            </Link>
          </Typography> */}
          {/* <IconButton color="inherit">
            <AccountBoxRoundedIcon />
          </IconButton> */}
          {/* <Tooltip title="Logout">
            <IconButton color="inherit" onClick={() => logoutUser()}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={() => logoutUser()}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={handleMobileMenuOpen} aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true" >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
  </div>
  );
};
const mapStateToProps = state => ({
  searchtextdist: state.searchDistributor
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setLoggedIn(false)),
  searchDist: val => dispatch(setSearchDistributor(val))
});

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  logout: PropTypes.func,
  searchDist: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
