import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './App.css';
import './index.css';
import './index-clc.css';

function App() {
  //CATEGORIES BECOMES IDENTIFIED AS AN ARRAY AND MOVED FROM NAV TO APP
  const [categories] = useState([
    {
      name: "business",
      description:
        "Digital asset tracker app; physical offices, a bank, and a medical project"
    },
    {
      name: "developments",
      description:
        "Digital team projects; physical stand-alone building projects"
    },
    {
      name: "wellness",
      description:
        "Digital workout apps for physical and social health; physical medical and healthclub facilities"
    },
    {
      name: "private",
      description:
        "Digital expression tools; physical private residences"
    },
    {
      name: "refactor",
      description:
        "Digital accessibility; physical typical energy efficiency and accessibility improvements"
    },
    {
      name: "consumer",
      description:
        "Digital foodie and retail apps; physical stores and restaurants"
    },
    {
      name: "testing",
      description:
        "Digital R&D apps; physical testing facilities"
    },
    {
      name: "leisure",
      description:
        "Digital game and math random apps; physical adventure places"
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //MAINTAIN THE STATE (NO CONTACTFORM VISIBLE AT FIRST) VIA USESTATE HOOK
  const [contactSelected, setContactSelected] = useState(false);

  //1.REMOVE THE REACT TEMPLATE CONTENT INSIDE THE <DIV> CONTAINER ELEMENT AND ADD A <MAIN> ELEMENT TO CONTAIN YOUR NEW COMPONENTS 2.INVOKE EACH COMPONENT'S FUNCTION BY CALLING IT IN THE APP.JS RETURN STATEMENT VIS A VIS <COMPONENTFUNCTIONNAME/> || <COMPONENTFUNCTIONNAME></COMPONENTFUNCTIONNAME> 3.NAV IN PASCAL BECOMES ITS OWN ELEMENT ABOVE MAIN 4. THEN PASS IN GETTERS AND SETTERS
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
