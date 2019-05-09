import React from 'react';

import './App.scss';
import CharactersList from '../CharactersList/CharactersList';
import Info from '../Info/Info';

class App extends React.Component {

  render() {

    return (
      <div className="App" >
        {/* <CharactersList /> */}
        <div>
          DUZA LISTA POSTACI
        </div>
        {/* <Info /> */}
      </div>
    );
  }
}

export default App;