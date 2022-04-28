import React from 'react'
import Profile from './Profile/Profile'
import Project from './Project/Project'
import Footer from './Footer/Footer'
import "./Home.css"

export default function Home() {
    return (
        <div className='home-container'>
            <Profile/>
            <Project/>
            <Footer/>
        </div>
    )
}