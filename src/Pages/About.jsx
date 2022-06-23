import React from "react";
import { Link } from "react-router-dom";


const About = ()=>{

    return(
        <main>
            <div style={{}}>
              <div style={{position: "relative"}}>
                <video src="./video/advert.mp4 " autoPlay  loop style={{width: "100%"}}></video>
                <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.8)"}}>
                    <h1 style={{color: "white", fontSize: "80px", textAlign: "center", marginTop: "150px"}}>The Story of EduTech Africa</h1>
                    <p style={{color: "white", fontSize: "30px", textAlign: "center"}}>An educational program designed <br /> to arm you with the skills <br /> and knowledge required to launch <br /> your tech career.</p>
                    <Link to={"/Courses"} style={{textDecoration: "none"}} >
                            <div className="btn" style={{marginLeft: "45%", marginTop: "50px" }}>
                            <p style={{paddingTop: "5px"}} ><b>Get Started</b></p>

                            </div>
                            </Link>

                </div>
              </div>


              <div>
                <div className="d-flex justify-content-between">
                    <div style={{width: "50%"}}>
                      <img src="./images/team.gif" alt="" />
                    </div>

                    <div style={{width: "50%"}}>
                        <h1 style={{marginLeft: "100px", fontSize: "90px", marginTop: "40px"}}>Our Story</h1>
                        <p>
                        While running EduTech, we realised that there was
                         a huge knowledge gap with some of the software engineers who passed through our vetting process, when it came to understanding basic things about software engineering.
                        </p>
                        <p>
                        A lot of them were self-taught and while they had gone on to gain good technical
                         skills, some foundational knowledge was missing.
                        </p>
                        <p>
                        So, we decided to make things easier by creating a school that is not fully a school. An alternative to school. Here you can, in under a year, learn and gain a certification in a myriad of disciplines to give you a great foundation as well as
                         the start you need to go for your dream tech career.
                        </p>
                        <p>
                        Our Mission is to help you get started on the career you want.
                         Whether you are fresh out of high school, seeking extra education, or want to transition to a career in tech, We will give you the skills and insight to achieve the success you desire.
                        </p>
                    </div>

                </div>
              </div>
            </div>

        </main>
    )
}
export default About;