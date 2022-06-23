import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Courses from "./Pages/Courses"
import Pagex from "./Pages/Pagex"
import Contact from "./Pages/Contact"
import Footer from "./Component/Footer"


 function App  (){
     return (

        <main>
            <Navbar />

            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Courses" element={<Courses />} />
                  <Route path="/Pagex" element={<Pagex />} />
                  <Route path="/Contact" element={<Contact />} />
            </Routes>
            <br />

            <Footer />
              
         </main>
    )

    
}


export default App;

