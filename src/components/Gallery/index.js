//IMPORT ANY IMAGES- ADD THE SRC ATTRIBUTE OF {COVERIMAGE}
// import coverImage from "../../assets/cover/0.jpg";
//MAKING A NEW REACT COMPONENT FOR THE GALLERY SECTION 1ST IMPORT 2ND FUNCTIONS 3RD EXPORT
import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.title)}</h1>
      <p>{currentCategory.description}</p>
      {/*PROP DRILL TO PASS DOWN THE currentCategorytitle AS A PROP INTO THE PHOTOLIST COMPONENT FROM HERE- ITS PARENT GALLERY RETURN STATEMENT*/}
      <PhotoList category={currentCategory.title} />
    </section>
  );
}

export default Gallery;