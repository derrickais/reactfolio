import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer'
import Resume from './components/Resume';
import Contact from './components/Contact';

const mainViews = {
  "about": () => <About />,
  "projects": () => <ProjectContainer />,
  "contact": () => <Contact />,
  "resume": () => <Resume />
}

function App() {
  const [route, setRoute] = useState('about')

  const activeView = mainViews[route]
  return (
    <div className="App">
      <Header setRoute={setRoute} />
        {activeView()}
      <Footer />
    </div>
  );
}

export default App;
