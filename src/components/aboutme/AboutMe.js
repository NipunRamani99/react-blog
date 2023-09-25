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
                        <p>Hi! I am Nipun. I have been programming since 2017. I have done my Bachelor's in Information Technology and Master's in Software Development.</p>
                        <p>I have worked as a software developer for about 2 years. In 2021, I worked for Amazon as an intern, then later I worked as a Java and React fullstack developer at Bullsurge(now Neosurge). In 2022, I worked as a frontend developer at SAP Labs before coming to Glasgow for my Master's.</p> 
                    </div>
                    </div>
                    <div className="sxs">
                    <div className="sxs-title">Location</div>
                    <div className="sxs-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317990.97234976024!2d-0.4185201493561758!3d51.48927996078473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00ba11ae26f%3A0x2ff173e384b8e98b!2sGreater%20London!5e0!3m2!1sen!2suk!4v1694948818924!5m2!1sen!2suk" width="100%" height="300px" style={{"border-radius":"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>somewhere in this city :)</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;