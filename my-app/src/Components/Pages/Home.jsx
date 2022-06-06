import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
import RecentSearch from '../Layout/RecentSearch';
import "./css/Home.style.css"



function Home(props) {
    return (
        <div className="container">
            <SearchForm />
            <div className="linkContainer">
                <Link className="link" to="/postjob" >
                    {`Employers Yours next job is - `} 
                </Link>
                Your next hire is here
            </div>
            <RecentSearch />
        </div>
    );
}

export default Home;