import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { bindActionCreators } from "redux";
import { requestAdminMonthJob, requestAdminGetProfile } from "../Redux/actions";
import { connect } from "react-redux";
const drawerWidth = 240;

const Layout = ({ children, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [user, setUser] = useState({});

  const handleToggleClick = () => {
    setShowUserProfile(!showUserProfile);
  };

  const iconStyles = {
    // position: 'absolute',
    // right: 0,
    cursor: "pointer", // Add a pointer cursor for better UX
    position: "absolute",
    right: 30,
    width: "40px",
    height: "42",
  };

  const profileStyles = {
    display: showUserProfile ? "block" : "none",
    position: "absolute",
    right: "10px", // Adjust the position as needed
    top: "40px", // Adjust the position as needed
    padding: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    zIndex: 1,
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    let getProfileData = props.data.getProfileData;
    if (getProfileData !== undefined) {
      if (getProfileData?.data?.status == "success") {
        if (getProfileData?.data?.data.role === "admin") {
          setUser(getProfileData.data.data);
        }
      }
    }
  }, [props.data.getProfileData]);

  useEffect(() => {
    let jobDetailsData = props.candidate.jobDetailsData;
    if (jobDetailsData !== undefined) {
      if (jobDetailsData?.data?.status == "success") {
          setUser(jobDetailsData.data.data);
      }
    }
  }, [props.data.jobDetailsData]);
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Bharat Online
          </Typography> */}
          <AccountCircleIcon style={iconStyles} onClick={handleToggleClick} />
          {showUserProfile && (
            <div style={profileStyles}>
              {/* User information goes here */}
              <p style={{color: "black"}}>User Name: {user.name}</p>
              <p style={{color: "black"}}>Email: {user.email}</p>
              <p style={{color: "black"}}>Role: {user.role}</p>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar
            handleDrawerToggle={handleDrawerToggle}
            style={{ backgroundColor: "#1890ff" }}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: "#1890ff",
          }}
          open
        >
          <Sidebar handleDrawerToggle={() => {}} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default Layout;
const mapStateToProps = (state) => {
  return {
    candidate: state.candidate,
    employee: state.employee,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestAdminMonthJob, requestAdminGetProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
