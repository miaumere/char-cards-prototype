import React from 'react';
import './App.scss';
import Form from '../Form/Form';

class App extends React.Component{

  render(){  

  return (
    <div className="App" >
    <Form />
    </div>
  );
  }
}

export default App;

// Image, nazwisko, ilosc lap, czy ma wszystkie lapy.
// Przy submicie: wyświetlenie całego info