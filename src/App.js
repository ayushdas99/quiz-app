import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Instructions from "./Pages/Instructions";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import QuizData from "./QuizData";

export default function App() {

    return(
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Instructions" element={<Instructions />} />
           <Route path="/QuizData" element={<QuizData />} />
           <Route path="/Quiz" element={<Quiz />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/About" element={<About />} />
           <Route path="/Contact" element={<Contact />} />
           
           
           
           
       </Routes>
        
    )
}