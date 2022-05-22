//IMPORT AN IMAGE FROM YOUR ASSETS FOLDER
// import coverImage from "../../assets/cover/cover-image.jpg"

//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/COMPONENTNAME TO MAKE A NEW REACT COMPONENT FOR THE SECTION 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO CAPITALIZE THE 'first letter' BEC. IT USES PASCAL CASING TO SIGNIFY THE REACT COMPONENT
import React from 'react';

function ContactForm() {
    return (
        <section>
            <h1 id="contact"> Contact Me!</h1>
            <form id="contact-form">
                {/* name:
                email:
                message text area: */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>

        </section>
    );
}

export default ContactForm;