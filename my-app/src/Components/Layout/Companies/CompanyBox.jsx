import React from 'react';
// import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';



export function CompanyBox({ logo, rating, name, handleClick, id}) {


    
    return (
        <Grid item container lg={4} md={4} sm={6} xs={12} style={{display:'flex', border: "1px solid #f2f2f2", padding: "20px"}}>
            <Grid item>
                <img src = {logo} alt = {name} width = "50px" style={{marginLeft:'10px'}}/>
            </Grid>
            
            <Grid item container >
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Typography className = "cursorPointer" onClick = {() => handleClick(id) } variant = "h6">{name}</Typography>
                </Grid>
                <Grid item container lg={12} md={12} sm={12} xs={12}  style = {{marginTop: "15px"}}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        {rating}
                        <StarIcon style = {{color: "#9d2b6b"}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        4 reviews
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container style = {{marginTop: "15px"}}>
                <Grid className = "cursorPointer" item lg={4} md={4} sm={4} xs={4}>Salaries</Grid>
                <Grid className = "cursorPointer" item lg={4} md={4} sm={4} xs={4}>Questions</Grid>
                <Grid className = "cursorPointer" item lg={4} md={4} sm={4} xs={4}>Open Jobs</Grid>
            </Grid>
    </Grid>
    );
}
