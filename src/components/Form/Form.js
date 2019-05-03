import React from 'react';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imieKota: "Fufa",
            nazwiskoKota: "Farafafa",
            nogiKota: 4,

        };
    
      }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
          });
      }

      handleSubmit = (event) => { 
          event.preventDefault();
          
        console.log(
            `Imię kota to: ${this.state.imieKota}, nazwisko kota to: ${this.state.nazwiskoKota},
natomiast liczba łap kota to: ${this.state.nogiKota}`
        )
       
      }
render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Imię koota:
          <input type="text" name="imieKota" value={this.state.imieKota} required onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Nazwisko koooota:
          <input type="text" name="nazwiskoKota" value={this.state.nazwiskoKota} required onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Liczba łap koooota:
        <input type="number" name="nogiKota" value={this.state.nogiKota} min="0" max="4" onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit"  value="Submit" />
      </form>
    );
    }
}
