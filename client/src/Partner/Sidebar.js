// Sidebar.js

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from 'antd';

const Sidebar = ({ handleDrawerToggle }) => {
  return (
    <div>
      {/* <Toolbar /> */}
      <Typography variant="h6"style={{fontSize: "25px", textAlign: "center", padding: "8px"}}>
            Bharat Online
          </Typography>
                <Divider />
      <List>
        <ListItem key="upload" disablePadding>
          <ListItemButton  to="/upload">
            <ListItemIcon>           
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Data" />
          </ListItemButton>
        </ListItem>
        <ListItem key="allData" disablePadding>
          <ListItemButton to="/all-data">
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="All Data" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Sidebar;
