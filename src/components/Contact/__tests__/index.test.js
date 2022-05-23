//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import Contact from '..';

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

// DECLARE THE COMPONENT BEING TESTED VIA DESCRIBE()
describe('Contact component', () => {
    // First Test
    it('renders', () => {
        render(<Contact />);
    });
    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('renders', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<Contact />)
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    })
})

//CREATE A TEST WHICH CHECKS VISIBILITY OF TEXT CONTENT

it('renders', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('contact')).toHaveTextContent('Contact me');
});

//CREATE VISIBILITY TEST

it('renders', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('button')).toHaveTextContent('Submit')
})


