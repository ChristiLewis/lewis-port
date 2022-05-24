//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS-THIS ONE IS FOR THE COMPONENT SECTION
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import Portfolio from '..';

const photolistCategories = {
    nameArr: ["business", "...", "wellness"],
    descriptionArr: [
        'Keep budget tracker as an online and offline personal accountant!',
        '...',
        'A social media backend to continue and react to conversation starters for post Covid social integration.'
    ]
};

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

//DECLARE THE COMPONENT BEING TESTED VIA DESCRIBE()
describe('Portfolio is rendering', () => {
    //RENDERS COMPONENT TEST
    it('renders', () => {
        render(<Portfolio photolistCategories={photolistCategories} />);
    });

    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot DOM node stucture', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<Portfolio photolistCategories={photolistCategories} />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    })

    //TEST TO CHECK THE NAME AND DESCRIPTION
    it('renders', () => {
        const { getByTestId } = render(<Portfolio photolistCategories={photolistCategories} />);
        expect(getByTestId('h1tag')).toHaveTextContent('business', 'Keep budget tracker as an online and offline personal accountant!')
    })

})
