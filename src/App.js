import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
// import './App.css';
// import './index-clc.css';

function App() {
  //ADD CATEGORIES - GO THE EXTRA MILE TO USE IT LATER
  const [categories] = useState([
    {
      name: "business-finance",
      description: "Digital asset tracker app; physical offices,bank, and a medical project"
    },
    { 
      name: "developments-bldgs", description: "Digital team projects; physical stand-alone building projects" 
    },
    { 
      name: "health-wellness", 
      description: "Digital conversation and excercise practice app; physical medical and healthclub facilities" 
    },
    { 
      name: "individual-residential", description: "Digital expression tools; physical private residences" 
    },
    { 
      name: "refactor-renovate", description: "Digital accessibility; physical typical energy efficiency and accessibility improvements" 
    },
    { 
      name: "retail-restaurant", description: "Digital foodie and retail apps; physical stores and restaurants" },
    { 
      name: "testing-storage", description: "Digital R&D apps; physical testing facilities" 
    },
    {
      name: "travel-leisure",
      description: "Digital planet and math random apps; physical adventure places"
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/*NAV IN PASCAL BECOMES ITS OWN ELEMENT ABOVE MAIN*/}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      {/* REMOVE THE REACT TEMPLATE CONTENT INSIDE THE <DIV> CONTAINER ELEMENT AND ADD A <MAIN> ELEMENT TO CONTAIN YOUR NEW COMPONENTS */}
      <main>
        <Gallery>currentCategory={currentCategory}</Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
