import React from 'react'
import Profile from './Profile/Profile'
import HomeFooter from './Footer/HomeFooter'
import "./Home.css"

export default function Home() {
    return (
        <div className='home-container'>
            <Profile/>
            
            <HomeFooter/>
        </div>
    )
}