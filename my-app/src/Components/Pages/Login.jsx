import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import "./css/login.style.css"


import {
    Box,
    Container,
    Grid,
    OutlinedInput,
    Typography,
    FormHelperText,
    FormControlLabel,
    Checkbox,
    Button,
} from '@mui/material';


import { useDispatch, useSelector } from 'react-redux';
import { makeLoginRequest } from '../../Redux/Login/actions';
import { Link, Redirect } from 'react-router-dom';


const GreenCheckbox = ((props) => <Checkbox color="default" {...props} />);

export function Login() {
    
    const {isAuth,isLoading,isError,errorMsg} = useSelector(state=>state.login)

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makeLoginRequest({email,password}))
    }


    return !isAuth ?
    <Container className = "container" maxWidth = "xl">
        {isError ? <Box>{errorMsg}</Box> : <></>}
        <Box className = "boxImg">
            
        </Box>
        <Box className = "boxForm">
            <Grid container spacing = {3} >
                <Grid item>
                    <Typography className = "h5" variant = "h5">Sign In</Typography>
                </Grid>
                <Grid item>
                    <form onSubmit = { handleSubmit }>
                        <FormHelperText className = "formhelperText">Email Address</FormHelperText>
                        <OutlinedInput  className = "outlinedInput" onChange = { onEmailChange } value = { email } required type = "text" variant="outlined"/>
                        <FormHelperText className = "formhelperText">Password</FormHelperText>
                        <OutlinedInput  className = "outlinedInput" onChange = { onPasswordChange } value = { password } required type = "password" variant="outlined"/>
                        <FormControlLabel className = "checkbox"
                            control = {<GreenCheckbox
                                // classes={{
                                //     root: classes.root,
                                //     checked: classes.checked
                        
                                />}
                            label = "Keep me signed in on this device."
                        />
                        <br/>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                        {
                            isLoading?<CircularProgress disableShrink />:<></>
                        }
                        </div>
                        <Button
                            type = "submit"
                            className = "button"
                            variant = "contained"
                            disabled={isLoading}
                            // classes={{
                            //     root: classes.root2
                            // }}
                            >
                            Sign In
                        </Button>
                        
                    </form>
                </Grid>
                
                <Grid container item spacing = {3}>
                    <Grid item>
                        <Typography style = {{cursor: "pointer", color : "#085ff7", margin:"0 115px"}} variant = "subtitle2" component={Link} to="/register">
                            New here ? Create an account ...!!!
                        </Typography>
                    </Grid>
                </Grid>
                <hr className = "pageBreak"></hr>
            </Grid>
        </Box>
        <Grid container spacing = {3} style = {{ flexDirection : "column", alignContent: "center", margin: "20px 0", color: "#085ff7"}}>
            <Grid item>
                {/* <Typography variant = "body2" style = {{cursor: "pointer"}}>
                    Forgot Your Password
                </Typography> */}
            </Grid>
        </Grid>
        <Grid container spacing = {1} style = {{fontSize : "14px", backgroundColor: "white", padding: "15px 10px", margin : "0 -20px "}} >
            <Grid item style = {{cursor: "pointer"}}>
            © Jayesh Shimpi | Naman Jain | Prachi Sachdeva
            </Grid>
        </Grid>
    </Container> : <div to="/" />;
}