//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS-THIS ONE IS FOR THE COMPONENT SECTION
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, fireEvent, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import Modal from '..';

//TEST TO HANDLE PROPS FOR THE NAV HERE UNDER THE IMPORT STATEMENTS
const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Keep',
    category: 'business',
    description: 'Keep budget tracker as an online and offline personal accountant!',
    index: 0
};

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

//DECLARE THE COMPONENT BEING TESTED VIA DESCRIBE()
describe('Modal component', () => {
    //RENDERS COMPONENT TEST
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });

    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot DOM node stucture', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    });

})

//RENDER THE MODAL W/ MOCK FUNCTION AND DECLARED CONSTANT CURRENTPHOTO THEN SIMULATE THE CLICK EVENT-FIREEVENT
describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'))

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  