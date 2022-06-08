// import React from 'react'
// import { Link } from 'react-router-dom'

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import FaceIcon from "@mui/icons-material/Face";
import { Link } from "react-router-dom";






const LandingPage = () => {
  return (
      <>
      
    
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} style={{ background: "white" }} position="static">
          <Toolbar className={styles.toolbar}>
            <Box className={styles.header_left}>
              <Box className={styles.link}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  className={styles.typography}
                >
                  <Link to="/">
                    <BusinessCenterIcon
                      fontSize="large"
                      style={{ color: "#127c71" }}
                    ></BusinessCenterIcon>
                  </Link>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  className={styles.typography}
                >
                  Find Jobs
                </Typography>
                <Link style={{textDecoration: 'none'}} to="/companyReviews">
                  <Typography
                    sx={{ fontSize: "1.2rem" }}
                    className={styles.typography}
                  >
                    Company Reviews
                  </Typography>
                </Link>
                {/* <Typography
                  sx={{ fontSize: "1.2rem" }}
                  className={styles.typography}
                >
                  Filter with Salary
                </Typography> */}
              </Box>
            </Box>
            <Box className={styles.header_right}>
              <ForumIcon
                fontSize="large"
                className={styles.leftIcon}
                style={{ color: "#127c71" }}
              />
              {/* <NotificationsIcon
                fontSize="large"
                className={styles.leftIcon}
                style={{ color: "#127c71" }}
              /> */}
              <Link to="/auth">
                <FaceIcon
                  fontSize="large"
                  className={styles.leftIcon}
                  style={{ color: "#127c71" }}
                />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
    <div>landingPage</div>
    <br></br>
    <Link to="/loginmain">Go to the login page</Link>

    
    </>
  )
}

export default LandingPage