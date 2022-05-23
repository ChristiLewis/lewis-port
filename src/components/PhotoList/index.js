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
      name: 'Keep',
      category: 'business',
      description:
        'Keep budget tracker online and offline personal accountant'
    },
    {
      name: 'Travel-buddy',
      category: 'developments',
      description:
        'Team project application offering real-time data for two of the most unpredictable patterns in the world; the weather and currency exchange.'
    },
    {
      name: 'Kitty_blah_blah',
      category: 'developments',
      description:
        'Team project app featuring a virtual diary with the latest meow meow encryption by Kitty Blah Blah'
    },
    {
      name: 'Vert',
      category: 'wellness',
      description:
        'A social media site to continue and react to conversation starters for post Covid social integration'
    },
    {
      name: 'Run-buddy',
      category: 'wellness',
      description:
        'A personal training website'
    },
    {
      name: 'Readme-genie',
      category: 'private',
      description:
        'Clone and run this node.js app to generate a quick yet thoughtful README file'
    },
    {
      name: 'Regenfrida',
      category: 'private',
      description:
        'A fun approach to learning about Regex functions'
    },
    {
      name: 'Code-refactor',
      category: 'refactor',
      description:
        'Making all code more accessible will require extensive work'
    },
    {
      name: 'Pizza-hunt',
      category: 'consumer',
      description:
        'Making a pizza as a fun social commentary event'
    },
    {
      name: 'Food-festival',
      category: 'consumer',
      description:
        'A food event database deployed as a PWA'
    },
    {
      name: 'Git-it-done',
      category: 'testing',
      description:
        'An app to do backend research with frontend convenience'
    },
    {
      name: 'Portfolio-generator',
      category: 'testing',
      description:
        'A backend resource to quickly update and produce front end material'
    },
    {
      name: 'Weather-or-not',
      category: 'leisure',
      description:
        'Weather apps help us decide where to go and what to do'
    },
    {
      name: 'Robot-gladiator',
      category: 'leisure',
      description:
        'Play a game of chance from your browser'
    },
    {
      name: 'Jest-another-RPG',
      category: 'leisure',
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
            src={require(`../../assets/digital/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
