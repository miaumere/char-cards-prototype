import React from 'react';
import './App.scss';
import Form from '../Form/Form';
import CharactersList from '../CharactersList/CharactersList'

class App extends React.Component{

  render(){  

  return (
    <div className="App" >
    <CharactersList />
    <br />
    <br />
    <Form />
    </div>
  );
  }
}

export default App;

// Nowy komponent o nazwie CharactersList 
// Gdy komponent zostanie zinicjalizowany, ma to zostac pobrane zostac wywolany rest - lista postaci 
// index.php z listą postaci, JSON  to ma byc
// + obsługa błędów