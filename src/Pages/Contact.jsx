import React from "react";
// import { Link } from "react-router-dom";

const Contact = ()=>{

    return(
        <main>
            <section class="heading">
                <h3>contact us</h3>
                {/* <p> <a href="home.html">home >></a> contact </p> */}
                {/* <Link to={"/"}   style={{textDecoration: "none", color: "black", marginLeft: "70px"}} >Home >>> Contact</Link>  */}
            </section>

            <section class="conta">

                <div className="contact">

                    <div className="icons">
                        <i class="fas fa-phone"  style={{marginLeft: "45%", fontSize: "50px", marginTop: "40px"}}></i>
                        <h3 style={{textAlign: "center"}}>our number</h3>
                        <p style={{textAlign: "center"}}>+2348137942788</p>
                    </div>

                <div className="icons">
                    <i class="fas fa-envelope"  style={{marginLeft: "45%", fontSize: "50px", marginTop: "40px"}}></i>
                    <h3 style={{textAlign: "center"}}>our email</h3>
                    <p style={{textAlign: "center"}}>ridwanbalogun511@gmail.com</p>
                </div>

                <div className="icons">
                   <i class="fas fa-location-dot"  style={{marginLeft: "45%", fontSize: "50px", marginTop: "40px"}}></i>
                    <h3 style={{textAlign: "center"}}>our address</h3>
                    <p style={{textAlign: "center"}}>lagos Nigria</p>
                </div>

            </div>

            <div className="row">

                 <form action="">
                    <h3 style={{marginTop: "20px", textAlign: "center"}}>Get in touch</h3>
                    <input type="text" placeholder="Your name" class="box" />
                    <input type="number" placeholder="Your number" class="box" />
                    <input type="email" placeholder="Your email" class="box" />
                    <textarea name="" placeholder="Your message" id="" cols="65" rows="10"></textarea>
                    <input type="submit" value="Send message" class="btn" />
                </form> 

                {/* <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1635757298406!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> */} 

                </div>

            


</section>




        </main>
    )
}
export default Contact;