import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import CharactersList from '../CharactersList/CharactersList';
import Info from '../Info/Info';
import Footer from '../Footer/Footer';

class App extends React.Component {

  render() {

    return (
      <div className="App" >
        <Navbar />
        <CharactersList />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;