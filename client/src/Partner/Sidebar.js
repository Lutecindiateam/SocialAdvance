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
import "./sidebar.css"
import ob from './image/ob.jpg';



const Sidebar = ({ handleDrawerToggle }) => {
  return (
   
    <div  style={{ backgroundColor: "#2c3e50", height: "100vh", padding: "10px"}}>
      {/* <Toolbar /> */}
     
     <div className="style" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>

              
              
          
                <strong style={{ color: "gold", fontWeight: "bold"}}>
                Bharat
                </strong>
                <img src={ob} alt="ob" style={{ height: "90%", width: "70px" }} />
               
               
            
                <strong style={{ color: "orange	", fontWeight: "bold" }}>
                 On
                </strong>
                <strong style={{ color: "white	", fontWeight: "bold" }}>
              li
                </strong>
                <strong style={{ color: "green	", fontWeight: "bold" }}>
                 ne
                </strong>
               
               
                </div>
   
          
                <Divider light/>
      <List>
        <ListItem key="upload" disablePadding>
          <ListItemButton  to="/upload">
            <ListItemIcon>           
              <AddIcon style={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Upload Data" style={{color:"white"}} />
          </ListItemButton>
        </ListItem>
        <ListItem key="allData" disablePadding>
          <ListItemButton to="/all-data">
            <ListItemIcon>
              <PeopleAltIcon style={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="All Data" style={{color:"white"}} />
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
