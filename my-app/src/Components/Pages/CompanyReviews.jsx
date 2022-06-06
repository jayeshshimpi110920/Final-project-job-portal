import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { CompanyBox } from "../Layout/Companies/CompanyBox";
import { useHistory } from 'react-router-dom';
import { searchCompany, getCompanyReviews } from '../../Redux/CompanyReviews/action';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import "./css/companyReviews.style.css";
import ban from "../Images/banner.jpg"


import {
    Container,
    Grid,
    Typography,
    Button,
    InputAdornment,
    TextField,
    FormHelperText,
} from '@mui/material';
import TypeWriter from './floattext';
     

export function CompanyReviews() {


    const[companies, setCompanies] = useState([]);
    const[query, setQuery] = useState("");
    const isSearching = useSelector(state => state.companies.isSearching);
    const dispatch = useDispatch();
    const history = useHistory();
   
    const {isAuth} = useSelector(state=>state.login)
    

    const onTextChange = (e) => {
        setQuery(e.target.value);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchCompany(query))
    }

    const handleCompanyClick = (id) => {
        dispatch(getCompanyReviews(id));
        history.push(`/reviews?id=${id}`)
    }

    useEffect(() => {
        axios.get("https://indeed-mock-server.herokuapp.com/companies")
            .then((res) => {
                
                setCompanies(res.data)
            })
            .catch((err) => console.log(err))
    },[])

    const ftext={
        
            textAlign: "center",
            padding: "5px",
            fontSize:"3vw",
            fontFamily: 'Comfortaa cursive'
    }



     
const typeWriter = ["Machine Learning", "Java Developer", "Data Analyst", "iOs Devloper", "Software Developer"];


    return isAuth ? ( !isSearching ?
    <Container className = "container" maxWidth = "xl">
        <Grid container className = "boxSearch" >
             <img src={ban} className="banimg" alt="banner"></img>
        </Grid>
        <div className="ftext" style={ftext}>Inspiring <TypeWriter data={typeWriter} /> </div>
        <div className="ftext" style={ftext}>Jobs for the future !!</div>

      

{/* try  */}
<Grid className = "companiesHiring" item container xl = {9} lg = {9} md = {9} sm = {11} xs = {12}>
            <Grid item container  >
                <Grid item>
                    <img src="/Images/location.PNG" alt="location pin" style = {{padding: "5px 0 5px 10px"}} />
                </Grid>
                <Grid item>
                    <Typography style = {{paddingTop: "15px"}} variant = "h5">Companies Hiring Now</Typography>
                </Grid>
            </Grid>
            <Grid container style={{width:'1000px'}}>
                    {
                        companies.map((item) => {
                            return(
                                <CompanyBox 
                                key = {item.id}
                                logo = {item.logo}
                                name = {item.company}
                                rating = {item.ratings}
                                id = {item.id}
                                // handleClick = {handleCompanyClick}
                                />
                            )
                        })
                    }
            </Grid>
        </Grid>



{/* try  */}



        <Grid className = "companiesHiring" item container xl = {9} lg = {9} md = {9} sm = {11} xs = {12}>
            <Grid item container  >
                <Grid item>
                    <img src="/Images/popularcompany.PNG" alt="location pin" style = {{padding: "5px 0 5px 10px"}} />
                </Grid>
                <Grid item>
                    <Typography style = {{paddingTop: "15px"}} variant = "h5">Popular Companies</Typography>
                </Grid>
            </Grid>
            <Grid container style={{width:'1000px'}}>
                    {
                        companies.map((item) => {
                            return(
                                <CompanyBox 
                                key = {item.id}
                                logo = {item.logo}
                                name = {item.company}
                                rating = {item.ratings}
                                id = {item.id}
                                // handleClick = {handleCompanyClick}
                                />
                            )
                        })
                    }
            </Grid>
        </Grid>
        <Grid className = "companiesHiring" style = {{borderTop: "10px solid #ff5a1f", padding: "25px", justifyContent: "space-between"}} container item xl={9} lg={9} md={9} sm={11} xs={12}>
            <Grid item >
                <Typography variant = "h5">Rate your recent company:</Typography>
            </Grid>
            <Grid item style = {{backgroundColor: "#f2f2f2", padding: "0 5px", borderRadius: "50px"}}>
                <Rating name="pristine" size = "large" style = {{color: "blue"}} />
            </Grid>
        </Grid>
        <Grid container spacing = {1} style = {{fontSize : "14px", backgroundColor: "white", padding: "15px 10px", margin : "0 -20px "}} >
            
        </Grid>
    </Container> : null ) : <div to = "/review" />;
}

