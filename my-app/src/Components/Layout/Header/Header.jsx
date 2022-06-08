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

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import WorkIcon from '@mui/icons-material/Work';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MenuIcon from '@mui/icons-material/Menu';








export default function Header() {





  return (
      <div className="root">
        <AppBar elevation={0} color={'secondary'} position="static">
          <Toolbar className="toolbar" >
              <Container className="header_container" disableGutters maxWidth={false}>
                  <Box className="header_left">
                      <img className="logo" src="/Images/logo.svg" alt=""/>
                      <Box className="link" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          <Typography component={NavLink} className="Navlink" variant='h6' to='/' >
                              Find Jobs
                          </Typography>
                          <Typography component={NavLink} className="Navlink" variant='h6' to='/companies' >
                              Company Reviews
                          </Typography>
                      </Box>
                      <Box className="link" sx={{ display: { xs: 'block', sm: 'none' } }}>
                          {/* <Typography component={NavLink} className="Navlink" style={{marginRight:"20px"}} variant='h6' to='/' >
                            <WorkIcon/>
                          </Typography>
                          <Typography component={NavLink} className="Navlink" variant='h6' to='/companies' >
                             <ReviewsIcon/>
                          </Typography> */}
                          <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                <Button  {...bindTrigger(popupState)}>
                                    <MenuIcon/>
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                        <Typography component={NavLink} className="Navlink" variant='h6' to='/' >
                                           <MenuItem > Find Jobs </MenuItem>
                                        </Typography>
                                        <Typography component={NavLink} className="Navlink" variant='h6' to='/companies' >
                                             <MenuItem >Company Reviews</MenuItem>
                                        </Typography>
                                </Menu>
                                </React.Fragment>
                            )}
                            </PopupState>
                      </Box>
                  </Box>
                  <Box className="header_right" >

                          {/* <IconButton edge="start" color="inherit" aria-label="open drawer" size="large">
                          <ForumIcon />
                          </IconButton> */}

                          {/* <IconButton edge="start" color="inherit" aria-label="open drawer" size="large">
                              <NotificationsIcon />
                          </IconButton> */}

                          
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