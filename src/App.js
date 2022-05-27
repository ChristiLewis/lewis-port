import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';
import './index.css';
import './index-clc.css';

function App() {
  //CATEGORIES BECOMES IDENTIFIED AS AN ARRAY AND MOVED FROM NAV TO APP
  const [categories] = useState([
    {
      name: "business",
      description:
        "An asset tracker app:"
    },
    {
      name: "developments",
      description:
        "Team projects:"
    },
    {
      name: "wellness",
      description:
        "Workout apps for physical and social health:"
    },
    {
      name: "private",
      description:
        "Personal improvement tools:"
    },
    {
      name: "refactor",
      description:
        "Best-practice and accessibility improvements:"
    },
    {
      name: "consumer",
      description:
        "Foodie friendly retail apps:"
    },
    {
      name: "testing",
      description:
        "R&D apps"
    },
    {
      name: "leisure",
      description:
        "The planet's own math random app- the weather and games:"
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [setcategories] = useState(categories[0]);

  //MAINTAIN THE STATE (NO CONTACTFORM VISIBLE AT FIRST) VIA USESTATE HOOK
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  //1.REMOVE THE REACT TEMPLATE CONTENT INSIDE THE <DIV> CONTAINER ELEMENT AND ADD A <MAIN> ELEMENT TO CONTAIN YOUR NEW COMPONENTS 2.INVOKE EACH COMPONENT'S FUNCTION BY CALLING IT IN THE APP.JS RETURN STATEMENT VIS A VIS <COMPONENTFUNCTIONNAME/> || <COMPONENTFUNCTIONNAME></COMPONENTFUNCTIONNAME> 3.NAV IN PASCAL BECOMES ITS OWN ELEMENT ABOVE MAIN 4. THEN PASS IN GETTERS AND SETTERS
  return (
    <div>
      <Nav
        categories={categories}
        setcategories={setcategories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}


      />
      <main>
        {!contactSelected || !portfolioSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />

            <About></About>

          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        {/* {!portfolioSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About></About>
          </>
        ) : (
          <Portfolio categories={categories} />
        )} */}
      </main>
    </div>
  );
}

export default App;
