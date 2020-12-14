import React, { useState } from 'react';
import {
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core';

import NestedMenuItem from 'material-ui-nested-menu-item';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
const styles = makeStyles(() => ({
  toggler: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    cursor: 'pointer',
    fontWeight: 600
  }
}));
export default function NestedMenu(props) {
  const [menuPosition, setMenuPosition] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = styles();
  const history = useHistory();
  const handleClick = event => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY + 20,
      left: event.pageX
    });
  };

  const handleItemClick = event => {
    setMenuPosition(null);
    history.push(event);
  };
  return (
    <div {...props}>
      <Typography
        component="span"
        onClick={handleClick}
        className={classes.toggler}
      >
        Menu
        <MoreVertIcon />
      </Typography>
      <Menu
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
        keepMounted
        open={!!menuPosition}
      >
        <MenuItem onClick={e => handleItemClick('/ticketing/ticket-dashboard')}>
          Ticketing
        </MenuItem>
        <MenuItem onClick={e => handleItemClick('/telephony/dashboard')}>
          Telephony
        </MenuItem>
        <MenuItem onClick={e => handleItemClick('/dash360/')}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={e => handleItemClick('/surveys/home')}>
          Surveys
        </MenuItem>
        {/* <NestedMenuItem
          label="Button 3"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
          <NestedMenuItem
            label="Sub-Button 3"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
          </NestedMenuItem>
        </NestedMenuItem> */}
        {/* <NestedMenuItem
          label="Button 5"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
        </NestedMenuItem> */}
      </Menu>
    </div>
  );
}
