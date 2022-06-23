import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{

    return(
        <main>
            <nav className="bg-primary d-flex justify-content-between " style={{ width: "100%", height: "80px"}}>
                <div style={{marginTop: "20px"}}>
                <Link to={"/"}   style={{textDecoration: "none", color: "white", marginLeft: "70px"}} >EduTech</Link> 

                </div>
             <div style={{marginTop: "20px"}}>
                <Link to={"/"} className="no" style={{textDecoration: "none", color: "white", marginLeft: "40px", marginRight: "40px"}} >Home</Link>
                <Link to={"/About"} className="no" style={{textDecoration: "none", color: "white" , marginLeft: "40px", marginRight: "40px"}} >About</Link>
                <Link to={"/Courses"}className="no"  style={{textDecoration: "none", color: "white" , marginLeft: "40px", marginRight: "40px"}} >Courses</Link>
                <Link to={"/Pagex"}className="no"  style={{textDecoration: "none", color: "white" , marginLeft: "40px", marginRight: "40px"}} >Pagex</Link>
                <Link to={"/Contact"}className="no"  style={{textDecoration: "none", color: "white" , marginLeft: "40px", marginRight: "40px"}} >Contact</Link>

             </div>  


             </nav>

        </main>
    )
}
export default Navbar;