import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './App.css';
{/*import logo from './logo.svg';*/}
function App() {
  return (
    <div className="App">
      {/*NAV IN PASCAL BECOMES ITS OWN ELEMENT ABOVE MAIN*/}
      <Nav></Nav>
        {/* REMOVE THE REACT TEMPLATE CONTENT INSIDE THE <DIV> CONTAINER ELEMENT AND ADD A <MAIN> ELEMENT TO CONTAIN YOUR NEW COMPONENTS */}
        <main>
          <About></About>
        </main>
    </div>
  );
}

export default App;
