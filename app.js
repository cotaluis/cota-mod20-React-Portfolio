import React from 'react';
import Header from './src/components/headers';
import AboutMe from './src/components/aboutMe';
import Projects from './src/components/projects';
import Contact from './src/components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
