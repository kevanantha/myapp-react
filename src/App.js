import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja.js';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yodhi', age: 24, belt: 'green', id: 2 },
      { name: 'Mario', age: 20, belt: 'brown', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
    console.log(ninjas);
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
    console.log(`Ninjas that has id: ${id} has been deleted`)
  }
  render() {
    return(
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welocome (:)</p>
        <Ninjas deleteNinja={ this.deleteNinja } ninjas={ this.state.ninjas }/>
        <AddNinja addNinja={ this.addNinja } />
      </div>
    );
  }
}

export default App;
