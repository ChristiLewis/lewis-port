//IMPORT ANY IMAGES- ADD THE SRC ATTRIBUTE OF {COVERIMAGE}
import coverImage from "../../assets/cover/0.jpg";
//MAKING A NEW REACT COMPONENT FOR THE GALLERY SECTION 1ST IMPORT 2ND FUNCTIONS 3RD EXPORT
import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/physical/business-finance/0.jpg";


function Gallery(props) {
    const currentCategory = {
        name: "business-finance",
        description:
          "Digital applications and physical business and finance projects",
      };
    return (
        <section className="my-5">
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Business and Finance Examples"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>

    );
}

export default Gallery;