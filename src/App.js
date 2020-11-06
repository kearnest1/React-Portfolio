import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';



function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Take a look at my work!',
    },
    { name: 'Resume', 
    description: 'Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <main>
        {/* {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          // <ContactForm></ContactForm>
        )} */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;