import React from 'react';
import "../../styles/AboutMe.css"
function AboutMe() {
    return(
        <div className='hero is-medium frontpage-about'>
            <div className='container'>
                <div class="hero-body me-auto ms-auto mt-5">
                    <div className="sxs" >
                    <div className="sxs-title">About Me</div>
                    <div className="sxs-content">
                        <p>I am a fullstack dev.</p>
                        <p>Currently slogging it out in the Java salt mines for JPMorganChase.</p>
                        <p>Stack: SpringBoot, ReactJs, Kubernetes, Oracle Database</p>
                    </div>
                    </div>
                    <div className="sxs">
                    <div className="sxs-title">Location</div>
                    <div className="sxs-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71640.60380852156!2d-4.342531865313049!3d55.86667643169038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow!5e0!3m2!1sen!2suk!4v1723139546884!5m2!1sen!2suk&iwloc=near&output=embed" width="100%" height="300px" style={{"border-radius":"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>somewhere in this city :)</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;