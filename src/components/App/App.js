import React from 'react';
import './App.scss';
import CharactersList from '../CharactersList/CharactersList'

class App extends React.Component{

  render(){  

  return (
    <div className="App" >
    <CharactersList />
    </div>
  );
  }
}

export default App;