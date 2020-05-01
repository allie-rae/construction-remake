import React from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Services />
    </div>
  );
}

export default App;
