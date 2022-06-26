//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/ABOUT TO MAKE A NEW REACT COMPONENT FOR THE ABOUT SECTION 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO CAPITALIZE THE 'A' IN ABOUT BEC. IT USES PASCAL CASING TO SIGNIFY THE REACT COMPONENT
import React from 'react';

//IMPORT AN IMAGE FROM YOUR ASSETS FOLDER
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="translucent lens with small windows" />
        </section>
    );
}

export default About;