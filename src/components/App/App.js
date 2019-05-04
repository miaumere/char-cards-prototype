import React from 'react';
import './App.scss';
import '../Navbar/Navbar'
import CharactersList from '../CharactersList/CharactersList'

class App extends React.Component{

  render(){  

  return (
    <div className="App" >
    <Navbar />
    <CharactersList />
    </div>
  );
  }
}

export default App;