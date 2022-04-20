import React from "react";
import Header from "../Layouts/Header";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";


export default function Home() {
    return(
        <div>
            <Header />
            <div className="start-page">
        <h1>Welcome to the quiz app!</h1>
        <h2>Let's go the quiz section and get started with it! </h2>
        <button><Link to="/Instructions">Let's start</Link></button>
        </div>
        <Footer />
        </div>
    )
}