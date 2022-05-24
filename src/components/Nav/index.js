//THIS NAV RETURNS A SINGLE JSX ELEMENT----> THE HEADER

// import React from 'react';
import React, { useEffect } from "react";
// import React, { useEffect } from 'react';
//REACT REJECTED - NEED A HELPER
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="classical_building, computer">
                        🏛️||💻
                    </span>
                    ChristiLewis goes phygital!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false) && setPortfolioSelected(false)}>
                            About me
                        </a>
                        {/* <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false) && setPortfolioSelected(true)}>
                            Portfolio
                        </a> */}
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-2 ${categories.name === category.name && !contactSelected && 'navActive'
                                }`}
                            key={categories.name === portfolioSelected}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(false)
                                    setContactSelected(false)
                                    setPortfolioSelected(categories);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                    setContactSelected(false)
                                    setPortfolioSelected(false);
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