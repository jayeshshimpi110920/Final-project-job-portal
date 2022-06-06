import React, { useEffect, useState,  useReducer } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import classNames from 'classnames'
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
import FillterButton from '../Layout/FilterJobsButton/FillterButton';
import { getSearchData, fetchSuccess, setCurrentPage } from '../../Redux/Search/actions';
import JobDescription from '../Layout/JobDescription';
// import styled from 'styled-components' 
import {timeDifference} from '../../Utils/timeDifference'
import JobMenu from '../Layout/Menu/JobMenu';
import {makeSaveJobRequest} from '../../Redux/SaveJob/actions';
import "./css/displayjob.style.css";
import CircularProgress from '@mui/material/CircularProgress';



function DisplayJobs(props) {
    
    
    const query = new URLSearchParams(props.location.search)



    let job = query.get('q') || ""
    let location = query.get('location') || ""
    let jt = query.get("jt") || ""
    let occu = query.get("occupation") || ""
    let edu = query.get("education") || ""
   
    
    const [ignored, forceUpdate] =useReducer(x => x + 1, 0)
    
    let jobs = useSelector(state=>state.search.searched)
    let totalCount = useSelector(state=>state.search.totalCount)
    const loggedUser = useSelector(state=>state.login.loggedUser);
    let isLoading = useSelector(state=>state.search.isLoading)
    let p = useSelector(state=>state.search.page)
    
    const handelReset = ()=>{
        dispatch(getSearchData(job,location,page))
        forceUpdate()
    }
    
    const pageNo = query.get('page')
    let [page,setPage] = useState(Number(pageNo))
    let [jobType,setJobType] = useState(jt) 
    let [occupation, setOccupation] = useState(occu)
    let [education , setEducation] = useState(edu)
    


    let [sortDateIsCliked,setSortDateIsCliked] = useState(false)

 


    // const limitWords = (snippet)=>{

    //     let str = "";
        
    //     for(let i = 0; i < 200 && !str[i]; i++){
    //         if(!snippet[i])
    //             break;
    //         str += snippet[i]
            
    //     }
    //     str += '........'
    //     return str
    // }

    let [jobData,setJobData] = useState(null)   
    const dispatch = useDispatch()
    const history = useHistory()
    

    const handlePageChange = (event, page) => {
        setPage(page)
        dispatch(setCurrentPage(page))
        history.push(`/jobs?q=${job}&location=${location}&page=${page}`)
    };

    const handleSort = (sort)=>{
        setSortDateIsCliked(!sortDateIsCliked)
        if(sort==='salary'){
            const newJob = jobs.sort((a,b)=>{
                return Number(b.startSalary) - Number(a.startSalary)

            })
            dispatch(fetchSuccess(newJob))
            }
        else
         {
            const newJob = jobs.sort((a,b)=>{
                return Number(b.date) - Number(a.date)

            })
            dispatch(fetchSuccess(newJob))
        }
            
        }


    useEffect(()=>{
        dispatch(getSearchData(job,location,page))
        forceUpdate()
    },[job,location,page])



    const getJobDescription = (job)=>{    
                setJobData(job)     
    }

    const mystate=useSelector((state)=>state.login.loggedUser);



    const handelSave = ({jobkey,location,companyName,jobTitle})=>{
        const {id,saved_jobs} = loggedUser
        saved_jobs[jobkey] = {
            jobkey,location,companyName,jobTitle,
            dateSaved:new Date().getTime()
        }
        
        dispatch(makeSaveJobRequest({user_id:mystate.user_id,saved_jobs}))
    }

    const removeFromSaved = ({jobkey})=>{
        const {id,saved_jobs} = loggedUser
        delete saved_jobs[jobkey]
        dispatch(makeSaveJobRequest({user_id:mystate.user_id,saved_jobs}))
    }

    

    return (
        <div className="job_section">
            <Box style={{transform:"scale(0.8) translateX(-12%)"}}>
                <SearchForm />
            </Box>
            {
                isLoading ? (

                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                ): jobs.length ? (
                    
                    <>
                <Box>
                {/* <FillterButton type={jobType} setType={setJobType} 
                typeArr={['Full-Time','Walk-In','Fresher','Part-Time']}
                formatDate={false}
                fiterType='jobType'
                jobs={jobs}
                typeStr='JOB TYPE'/> */}


                {/* <FillterButton type={occupation} setType={setOccupation} 
                typeArr={['Software','Government','Account','Personal assistant']}
                formatDate={false}
                fiterType='occupation'
                jobs={jobs}
                typeStr='Occupation'/> */}

                {/* <FillterButton type={education} setType={setEducation} 
                typeArr={[`12th Pass`,`Diploma`,`Bachelors degree`,`Masters degree`]}
                formatDate={false}
                fiterType='education'
                jobs={jobs}
                typeStr='Education'/> */}
{/* 
                <FillterButton type={salary} setType={setSalary} 
                typeArr={["1k-5k","10k-20k"]}
                formatDate={false}
                jobs={jobs}
                fiterType='salary'
                typeStr='Salary'/> */}
            {/* <button style={{width:'100px',height:'35px',color:'white',backgroundColor:'#193C74',outline:'none',borderRadius:'5px'}} onClick={handelReset}>
                Resest
            </button> */}




            </Box>
            <Box className="greyText">
                jobs in {location}
            </Box>
            {ignored ? null : null}
            <Box className="sort_container">
                {/* <Box>
                    Sort by 
                    <span className={classNames({[classes.sortStyle] : sortDateIsCliked , [classes.bold] : !sortDateIsCliked})} onClick={()=>handleSort('salary')}> salary </span> 
                    / 
                    <span className={classNames({[classes.sortStyle] : !sortDateIsCliked , [classes.bold] : sortDateIsCliked})} onClick={()=>handleSort('date')}> date </span>
                </Box> */}
                {/* <Box>
                    {
                        `Page ${page} of ${totalCount} results`
                    }
                </Box> */}
              
            </Box>

           
                <Box style={{display:'flex'}} >
                     
                    <Grid className="jobContainer" classes="fhhh" container>

                        {
                            jobs.map((job,index)=>
                            <Grid className="card"  item key={job.jobkey} lg={12} md={12} sm={12} xs={12} >
                                <Box 
                                onClick={()=>getJobDescription(job)} 
                                >
                                    <Typography  className="job_title">
                                        {job.jobTitle}
                                    </Typography>
                                    <Typography className="job_subTitle">
                                        {job.companyName}
                                    </Typography>
                                    <Typography className="job_subTitle">
                                        {job.location}
                                    </Typography>
                                    <Typography className="job_subTitle">
                                    ₹ {Number(job.startSalary).toLocaleString('en-IN')} - ₹ {Number(job.endSalary).toLocaleString('en-IN')}
                                    </Typography>
                                    {/* <div className={classes.job_snippet} >
                                        {
                                            limitWords(job.snippet)
                                        }
                                    </div> */}
                                    {/* <Typography className={classes.greyText}>
                                        {timeDifference(job.date)}
                                    </Typography> */}
                                </Box>
                                <JobMenu 
                                job={job} 
                                handelSave={handelSave}
                                removeFromSaved={removeFromSaved}/>
                            </Grid>)
                        }
                        
                    </Grid>
                    
                    {
                        jobData ? <JobDescription  className="chhh" jobData={jobData} summary={job.snippet} /> : <></> 
                    }
                   
                    
                </Box>
                
                
                <Pagination onChange={handlePageChange} count={
                    totalCount % 5 === 0 ?
                    Math.floor(totalCount/5) : Math.floor(totalCount/5) + 1 } variant="outlined" page={p} shape="rounded" />
                    </>
                ) : <Box>No results found</Box>
            }
            
        </div>
    );
    
}

export default DisplayJobs;