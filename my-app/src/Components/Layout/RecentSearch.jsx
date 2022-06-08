// import { Box, Button, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import React, { useState, useEffect } from 'react';
// import { loadData, saveData } from '../../Utils/localStorage';
// import {getSearchData} from "../../Redux/Search/actions"
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import "./recentSearch.style.css"

// // const PREFIX = 'RecentSearch';

// // const classes = {
// //     recentSearchContainer: `${PREFIX}-recentSearchContainer`,
// //     recentSearchHeader: `${PREFIX}-recentSearchHeader`,
// //     recentSearchList: `${PREFIX}-recentSearchList`,
// //     recentSearchText: `${PREFIX}-recentSearchText`
// // };

// // const StyledBox = styled(Box)((
// //     {
// //         theme
// //     }
// // ) => ({
// //     [`&.${classes.recentSearchContainer}`]: {
// //         padding:'0 12vw',
// //         marginTop:'40px'
// //     },

// //     [`& .${classes.recentSearchHeader}`]: {
// //         display:'flex',
// //         alignItems:'center',
// //         justifyContent:'space-between'
// //     },

// //     [`& .${classes.recentSearchList}`]: {
// //         marginTop:'30px',
// //         '& li':{
// //             marginBottom:'40px',
// //             fontSize:'16px',
// //             display:'flex',
// //             alignItems:'center',
// //             justifyContent:'space-between',
// //             letterSpacing:'0.1rem',
// //             transition:'all 0.2s ease',
// //         }
// //     },

// //     [`& .${classes.recentSearchText}`]: {
// //         '&:hover':{
// //             cursor:'pointer',
// //             textDecoration:'underline'
// //         }
// //     }
// // }));

// function RecentSearch(props) {

//     const [isEditClicked,setIsEditIsClicked] = useState(false);
//     const [recent, setRecent] = useState([])
//     const history = useHistory()
//     const dispatch = useDispatch() 

//     // useEffect(() => {
//     //     let data = loadData("recent") || []
//     //     // console.log(data,"recent")
//     //     setRecent(data)
//     // }, [])
    
//     // console.log(recent)
//     const handleClearRecent=()=>{
//         saveData("recent",[])
//         setRecent([])
//     }

//     const handleDeleteRecent=(key)=>{
//         let data = recent.filter((item,index)=>index !== key?item :null )
//         // console.log(data)
//         saveData("recent",data)
//         setRecent(data)
//     }



//     const handleSearch=(e)=>{
//         let {innerHTML} = e.target
//         let job = "" , location=""
//         let query = innerHTML
//         let name = e.target.getAttribute("name")
//         if(name === "both")
//         {
//             query = query.split(" - ")
//             job = query[0]
//             location = query[1]
//         }
//         else if(name === "job")
//         {
//             job = query
//         }        
//         else{
//             location = query
//         }
        
//         dispatch(getSearchData(job,location))
        
//         let data = loadData("recent") || []
//         let str = job !== "" && location !== "" ? {category:"both" , query: `${job} - ${location}`} : job === "" && location !== "" ? {category:"location", query:`${location}`} : {category:"job",query:`${job}`}
        
//         if(data.length === 4){
//             data.reverse()
//             if(data.some(item=>item.category===str.category && item.query === str.query)){
//                 data = data.filter(item=>item.category !== str.category || item.query !== str.query)
//                 data.push(str)
//             }
//             else{
//                 data.shift()
//                 data.push(str)
//             }
            
//         }
//         else {
//             if(data.some(item=>item.category===str.category && item.query===str.query)){
//                 data = data.filter(item=>item.category !== str.category || item.query !== str.query)
//                 data.push(str)
//             }
//             else{
                
//                 data.push(str)
//             }
//         }

//         saveData("recent",data.reverse())
//         history.push(`/jobs?q=${job}&location=${location}&page=1`)

//         // console.log(str,"str")

//     }

//     return (
//         <div className="recentSearchContainer">
//             <Box className="recentSearchHeader">
//                 <Typography style={{fontSize:'20px'}} variant="h5">
//                     Recent Searches
//                 </Typography>
//                 {/* {
//                     isEditClicked && recent.length !==0 ? 
//                     <Box>
//                         <Button variant='contained' style={{marginRight:'10px'}} onClick ={()=>handleClearRecent()}>
//                             Clear
//                         </Button >
//                         <Button variant='contained' onClick={()=>setIsEditIsClicked(false)}>
//                             Done
//                         </Button>
//                     </Box> :
//                     <Button className="editBtn" onClick={()=>setIsEditIsClicked(true)}>
//                         Edit
//                     </Button>
//                 } */}
                
//             </Box>
//                 <ul className="recentSearchList">
//                     {/* <li>
//                         <span className={classes.recentSearchText}>
//                             java developer - Mumbai, Maharashtra
//                         </span>
//                         {
//                             isEditClicked ?
//                             <Button style={{fontWeight:'bolder'}}>
//                                 X
//                             </Button> :
//                             <></> 
//                         }
                        
//                     </li> */}
//                     {
//                         // recent?.map((item,index)=>(
//                         //     // console.log(item,"item")
//                         //     <li key = {index}>
//                         //     <div name={item.category} className="recentSearchText" onClick={e=>handleSearch(e)}>
//                         //         {/* java developer - Mumbai, Maharashtra */}
//                         //         {item.query}
//                         //     </div>
//                         //         <Button style={{fontWeight:'bolder'}} onClick={()=>handleDeleteRecent(index)}>
//                         //             X
//                         //         </Button> 
//                         //     </li>
//                         // ))
//                     }

                    
//                 </ul>
//         </div>
//     );
// }

// export default RecentSearch;