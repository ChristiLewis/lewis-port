//THIS NAV RETURNS A SINGLE JSX ELEMENT----> THE HEADER

//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/NAV TO MAKE A NEW REACT COMPONENT FOR THE NAV SECTION WHICH IS THE HEADER. 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO USE PASCAL CASING TO SIGNIFY THE REACT COMPONENT

// import React from 'react';
import React, { useState, useEffect } from "react";
// import React, { useEffect } from 'react';
//REACT REJECTED - NEED A HELPER
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    {/*REACT RESPONDS TO THIS.HANDLECLICK - NOT HANDLECLICK ALONE */}
    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="classical_building, computer">
                        🏛️||💻
                    </span>
                    Phygital!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span>Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    // setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;