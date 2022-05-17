//THIS NAV RETURNS A SINGLE JSX ELEMENT----> THE HEADER

//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/NAV TO MAKE A NEW REACT COMPONENT FOR THE NAV SECTION WHICH IS THE HEADER. 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO CAPITALIZE THE 'A' IN ABOUT BEC. IT USES PASCAL CASING TO SIGNIFY THE REACT COMPONENT
import React from 'react';

function Nav() {
    //ADD CATEGORIES - GO THE EXTRA MILE TO USE IT LATER
    const categories = [
        {
            name: "business-finance",
            description:
                "Digital asset tracker app; physical offices,bank, and a medical project",
        },
        { name: "developments-bldgs", description: "Digital team projects; physical stand-alone building projects" },
        { name: "health-wellness", description: "Digital conversation and excercise practice app; physical medical and healthclub facilities" },
        { name: "individual-residential", description: "Digital expression tools; physical private residences" },
        { name: "refactor-renovate", description: "Digital accessibility; physical typical energy efficiency and accessibility improvements" },
        { name: "retail-restaurant", description: "Digital foodie and retail apps; physical stores and restaurants" },
        { name: "testing-storage", description: "Digital R&D apps; physical testing facilities" },
        {
            name: "travel-leisure",
            description: "Digital planet and math random apps; physical adventure places"
        }
    ];
    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="classical_building, computer">🏛️||💻 </span> Phygital!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Contact')}>Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;