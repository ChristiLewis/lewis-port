//WHEN USING USESTATE OR OTHER HOOKS TO SET DEFAULT VALUES FOR THE ARRAY- MODIFY THE IMPORT STATEMENT 
import React, { useState } from 'react';

//PHOTOLIST CHILD COMPONENT TO GALLERY= USING OBJECTS WITH TITLES AND DESCRIPTIONS TO USE IN THE MODAL LATER
const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Asset graph',
      category: 'business-finance',
      description:
        'Keep budget tracker online and offline personal accountant'
    },
    {
      name: 'Travel buddy logo',
      category: 'developments-bldgs',
      description:
        'Team project application offering real-time data for two of the most unpredictable patterns in the world; the weather and currency exchange.'
    },
    {
      name: 'Kitty blah blah',
      category: 'developments-bldgs',
      description:
        'Team project application featuring a virtual diary utilizing the latest meow meow encryption by Kitty Blah Blah'
    },
    {
      name: 'Vert',
      category: 'health-wellness',
      description:
        'A social media site to build, continue, and react to conversation starters for post Covid social integration'
    },
    {
      name: 'Run buddy',
      category: 'health-wellness',
      description:
        'A personal training website'
    },
    {
      name: 'Readme genie',
      category: 'individual-residential',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Regenfrida gist',
      category: 'individual-residential',
      description:
        'A fun approach to learning about Regex functions'
    },
    {
      name: 'Refactoring code',
      category: 'refactor-renovate',
      description:
        'Making all code accessible will require extensive work'
    },
    {
      name: 'Pizza hunt',
      category: 'retail-restaurant',
      description:
        'Making a pizza as a fun social commentary event'
    },
    {
      name: 'Food festival',
      category: 'retail-restaurant',
      description:
        'A food event database deployed as a PWA'
    },
    {
      name: 'Git it done',
      category: 'testing-storage',
      description:
        'An app to do backend research with frontend convenience'
    },
    {
      name: 'Portfolio generator',
      category: 'testing-storage',
      description:
        'A backend resource to quickly update and produce front end material'
    },
    {
      name: 'Weather or not',
      category: 'travel-leisure',
      description:
        'Weather apps help us decide where to go and what to do'
    },
    {
      name: 'Robot gladiator',
      category: 'travel-leisure',
      description:
        'Play a game of chance from your browser'
    },
    {
      name: 'Jest another rpg',
      category: 'travel-leisure',
      description:
        'Play a game of chance from your CLI.'
    },

  ]);

  const currentPhotos = photos
    .filter(photo => photo.category === category)
  

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/digital/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
