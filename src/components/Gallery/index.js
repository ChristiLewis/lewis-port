//IMPORT ANY IMAGES- ADD THE SRC ATTRIBUTE OF {COVERIMAGE}
// import coverImage from "../../assets/cover/0.jpg";
//MAKING A NEW REACT COMPONENT FOR THE GALLERY SECTION 1ST IMPORT 2ND FUNCTIONS 3RD EXPORT
import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

// const PhotoListCategory={currentCategoryName} && category.name && key


function Gallery(props) {
  const { currentCategory } = props;
  const currentCategoryName = '  ';
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategoryName)}</h1>
      <p>{currentCategory.description}</p>
      {/*PROP DRILL TO PASS DOWN THE currentCategoryname AS A PROP INTO THE PHOTOLIST COMPONENT FROM HERE- ITS PARENT GALLERY RETURN STATEMENT*/}
      <PhotoList category={currentCategoryName} />
    </section>
  );
}

export default Gallery;