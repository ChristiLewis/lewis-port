//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import Nav from '..';

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

//CREATE A TEST

describe('Nav component', () => {
    // BASELINE Test
    it('renders', () => {
        render(<Nav />);
    });

    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<Nav />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    });

})

//CREATE EMOJI VISIBILITY TEST VIA A NEW DESCRIBE FUNCTION
describe('emoji is visible', () => {
    //CHECKS IF EMOJI IS INSERTED INTO THE H2 ELEMENT IN THE NAV COMPONENT
    it('inserts emoji into the h2', () => {
        //QUERY TO RETURN THE EMOJI VIA ITS SPAN ELEMENT
        const { getByLabelText } = render(<Nav />);
        //AND ACCESSIBILITY ARIA LABEL VIA A CUSTOM MATCHER
        expect(getByLabelText('classical_building, computer')).toHaveTextContent('🏛️||💻');
    });
})

//CREATE THE VISIBILITY TEST
describe('links are visible', () => {
    it('inserts text into the links', () => {
        //ARRANGE THE QUERIES
        const { getByTestId } = render(<Nav />);
        //ADD ASSERTION VIA ARIA LABEL VIA A CUSTOM MATCHER
        expect(getByTestId('link')).toHaveTextContent('Phygital!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})













