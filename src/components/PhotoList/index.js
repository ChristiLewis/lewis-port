//WHEN USING USESTATE OR OTHER HOOKS TO SET DEFAULT VALUES FOR THE ARRAY- MODIFY THE IMPORT STATEMENT 
import React, { useState } from 'react';
//IMPORT MODAL OR THE CODE WILL BREAK-MAKE A MODAL COMPONENT AND ADD IT TO ALL REQ FILES
import Modal from '../Modal';

//PHOTOLIST CHILD COMPONENT TO GALLERY= USING OBJECTS WITH TITLES AND DESCRIPTIONS TO USE IN THE MODAL
const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      title: 'Asset graph',
      category: 'business-finance',
      description:
        'Keep budget tracker online and offline personal accountant'
    },
    {
      title: 'Travel buddy logo',
      category: 'developments-bldgs',
      description:
        'Team project application offering real-time data for two of the most unpredictable patterns in the world; the weather and currency exchange.'
    },
    {
      title: 'Kitty blah blah',
      category: 'developments-bldgs',
      description:
        'Team project application featuring a virtual diary utilizing the latest meow meow encryption by Kitty Blah Blah'
    },
    {
      title: 'Vert',
      category: 'health-wellness',
      description:
        'A social media site to build, continue, and react to conversation starters for post Covid social integration'
    },
    {
      title: 'Run buddy',
      category: 'health-wellness',
      description:
        'A personal training website'
    },
    {
      title: 'Readme genie',
      category: 'individual-residential',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      title: 'Regenfrida gist',
      category: 'individual-residential',
      description:
        'A fun approach to learning about Regex functions'
    },
    {
      title: 'Refactoring code',
      category: 'refactor-renovate',
      description:
        'Making all code accessible will require extensive work'
    },
    {
      title: 'Pizza hunt',
      category: 'retail-restaurant',
      description:
        'Making a pizza as a fun social commentary event'
    },
    {
      title: 'Food festival',
      category: 'retail-restaurant',
      description:
        'A food event database deployed as a PWA'
    },
    {
      title: 'Git it done',
      category: 'testing-storage',
      description:
        'An app to do backend research with frontend convenience'
    },
    {
      title: 'Portfolio generator',
      category: 'testing-storage',
      description:
        'A backend resource to quickly update and produce front end material'
    },
    {
      title: 'Weather or not',
      category: 'travel-leisure',
      description:
        'Weather apps help us decide where to go and what to do'
    },
    {
      title: 'Robot gladiator',
      category: 'travel-leisure',
      description:
        'Play a game of chance from your browser'
    },
    {
      title: 'Jest another rpg',
      category: 'travel-leisure',
      description:
        'Play a game of chance from your CLI.'
    },

  ]);

  const currentPhotos = photos
    .filter(photo => photo.category === category)

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/digital/${category}/${i}.jpg`).default}
            alt={image.title}
            classtitle="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.title}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
