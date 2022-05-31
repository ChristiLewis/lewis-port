//IMPORT ANY IMAGES- ADD THE SRC ATTRIBUTE OF {COVERIMAGE}
// import coverImage from "../../assets/cover/0.jpg";
//MAKING A NEW REACT COMPONENT 1ST IMPORT 2ND FUNCTIONS 3RD EXPORT
import React from 'react';
import Gallery from '../Gallery';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { categories } = props;
  console.log(categories);
  return (
    <section>
      <h1 data-testid="h1tag">{(categories.nameArr)}</h1>
      <p>{categories.descriptionArr}</p>
      {/*PROP DRILL TO PASS DOWN THE CATEGORIEs'NAMES AND DESCRIPTION AS PROPS INTO THE GALLERY COMPONENT FROM HERE- ITS PARENT PORTFOLIO RETURN STATEMENT*/}
      <Gallery categories={categories['']} />
    </section>
  );
}

export default Portfolio;