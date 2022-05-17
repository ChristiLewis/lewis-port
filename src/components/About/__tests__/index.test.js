//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS-THIS ONE IS FOR THE ABOUT SECTION
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import About from '..';

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

//DECLARE THE COMPONENT BEING TESTED VIA DESCRIBE()
describe('About component', () => {
    //RENDERS ABOUT TEST
})

//CREATE A TEST

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot DOM node stucture', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render( <About />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    })


})