import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Asset graph',
      category: 'business-finance',
      description:
        'Keep budget tracker online and offline personal accountant'
    },
    {
      name: 'Travel Buddy logo',
      category: 'developments-bldgs',
      description:
        'Team project application offering real-time data for two of the most unpredictable patterns in the world; the weather and currency exchange.'
    },
    {
      name: 'Kitty Blah Blah',
      category: 'developments-bldgs',
      description:
        'Team project application featuring a virtual diary utilizing the latest meow meow encryption by Kitty Blah Blah'
    },
    {
      name: 'Vert Bein Green',
      category: 'health-wellness',
      description:
        'A social media site to build, continue, and react to conversation starters for post Covid social integration'
    },
    {
      name: 'Run Buddy Logo',
      category: 'health-wellness',
      description:
        'A personal training website'
    },
    {
      name: 'README GENIE video pic',
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
      name: 'Pizza Hunt website',
      category: 'retail-restaurant',
      description:
        'Making a pizza as a fun social commentary event'
    },
    {
      name: 'Foodies icon on Android',
      category: 'retail-restaurant',
      description:
        'A food event database deployed as a PWA'
    },
    {
      name: 'GitHub user repo R&D',
      category: 'testing-storage',
      description:
        'An app to do backend research with frontend convenience'
    },
    {
      name: 'Portfolio Generator',
      category: 'testing-storage',
      description:
        'A backend resource to quickly update and produce front end material'
    },
    {
      name: 'Weather or Not',
      category: 'travel-leisure',
      description:
        'Weather apps help us decide where to go and what to do'
    },
    {
      name: 'Robot Gladiator',
      category: 'travel-leisure',
      description:
        'Play a game of chance from your browser'
    },
    {
      name: 'Robot Gladiator plus',
      category: 'travel-leisure',
      description:
        'Playa gane of chance from your CLI.'
    },

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

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
