import React from 'react';

import './App.scss';
import CharactersList from '../CharactersList/CharactersList';
import Info from '../Info/Info';

class App extends React.Component {

  render() {

    let objFromApi = [
      {
      id: 1,
      name: "Jean",
      surname: "DULEVLE"
    },
      {
      id: 2,
      name: "FEFE",
      surname: "fifi"
    }
  ]

    console.log(this)

    return (


      <div className="App" >
        <CharactersList />
        <Info />
       
      </div>
    );
  }
}

export default App;