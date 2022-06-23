import React from "react";
import { Link } from "react-router-dom";




const Home = ({view})=>{

  

    return(
        <main>
            <div style={{display: "flex", marginTop: "20px"}}>
                <div className=""style={{width: "50%",  paddingLeft: "20px", paddingRight: "20px"}}>      
                 <video src="/video/view.mp4" autoPlay  loop width="100%" style={{borderRadius: "20px", aspectRatio: "20 / 14"}}></video>
                </div>

                <div  style={{width: "50%", marginTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <h1 className="text-primary" style={{fontSize: "60px"}}>Your Course To <br /> Success</h1>
                    <p style={{fontSize: "18px", color: "balck"}}>
                       <b>
                       Learn high in-demand product skills from leading  field  experts
                        that will have you  job-ready  in 12 months.  No degree
                        or prior tech experience required.
                       </b>
                    </p>
                        <Link to={"/Courses"} style={{textDecoration: "none"}} >
                            <div className="btn">
                            <p style={{paddingTop: "5px"}} ><b>Get Started</b></p>

                            </div>
                            </Link>

                </div>


            </div>

            {/* Coureses outline */}
                 <div style={{marginTop: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/coding.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>Software Engineering</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/ui.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>Product Design (ui / ux)</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/data.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>Data Science</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/robotic.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>Artifical Intelligence</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/devops.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>DevOps</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/digital.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>Digital Marketing</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/graphic.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>Graphics Design</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>
                        <div className="core">
                            <div style={{padding: "50px", textAlign: "center"}}><img src="./images/animation.png" style={{width: "100px",  height: "100px"}} alt="" /></div>
                            <div> <p style={{textAlign: "center"}}><b>2D/3D Animation</b></p></div>
                            <div> <hr /></div>


                            <div style={{display: "flex",marginRight: "10px"}} className="justify-content-between"> 
                                 <div style={{padding: "5px"}}><img src="./images/call.png" style={{width: "20px",  height: "20px"}} alt="" /> 12 Modules</div>
                                <div><img src="./images/clock.png" style={{width: "20px",  height: "20px"}} alt="" /> 8hours</div>
                                </div>
                        </div>

                    </div>
                </div>


        </main>
    )
}
export default Home;