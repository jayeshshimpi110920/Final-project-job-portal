import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import ForumIcon from '@mui/icons-material/Forum';
import { NavLink } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserMenu from '../Menu/UserMenu';
import { useSelector } from 'react-redux';
import { useState } from "react";
import "./header.style.css";
import { Modal, ModalContent } from "./Modal";
// import noti from "./Noti.jpg"







export default function Header() {


  //pop-up notification..!!!
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);


  return (
      <div className="root">
        <AppBar elevation={0} color={'secondary'} position="static">
          <Toolbar className="toolbar" >
              <Container className="header_container" disableGutters maxWidth={false}>
                  <Box className="header_left">
                      <img className="logo" src="/Images/logo.svg" alt=""/>
                      <Box className="link" display={{ xs: 'none', sm: 'block', md: 'block' }}>
                          <Typography component={NavLink} className="Navlink" variant='h6' to='/' >
                              Find Jobs
                          </Typography>
                          <Typography component={NavLink} className="Navlink" variant='h6' to='/companies' >
                              Company Reviews
                          </Typography>
                      </Box>
                  </Box>
                  <Box className="header_right" >

                          <IconButton edge="start" color="inherit" aria-label="open drawer" size="large">
                          <ForumIcon />
                          </IconButton>

                          <IconButton edge="start" color="inherit" aria-label="open drawer" size="large">
                              <NotificationsIcon />
                          </IconButton>

                          
                              <UserMenu/>
                          

                          {/* <Typography style={{display:'flex',alignItems:'center'}} component={NavLink} variant='h6' to='/postjob' >
                              Employers/jobs
                          </Typography> */}
                          <div style={{display:'flex',alignItems:'center', fontWeight:'bold'}} component={NavLink} variant='h6' >
                              Employers/jobs
                          </div>
                      
                  </Box>
              </Container>
          </Toolbar>
        </AppBar>
        
      </div>
  );
}