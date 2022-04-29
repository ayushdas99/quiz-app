import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layouts/Navbar";



export default function Home() {
    return(
        <>
        <Navbar />
        <div className="home-background">    
        <h1>Welcome to the quiz app!</h1>
        <h2>Let's start this amazing quiz right away! </h2>
        <div className="start-button-container">
            <ul>
            <button className="start-button"><Link to="/Instructions"><b>LET'S START</b></Link></button>
            </ul>
        </div>
        <div className="auth-container">
        <ul>
            <button className="auth-button"><Link to="/Login"><b>LOGIN</b></Link></button>
            </ul>
        </div>
        </div>
        </>
    )
}