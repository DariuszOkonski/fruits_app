import React, { Component } from 'react';
import './App.css';
import fruits from './foods';
import { choice, remove } from './helpers';

class App extends Component {
  render() {
    const fruit = choice(fruits);
    const remaining = remove(fruits, fruit);

    return (
      <div className='App App-header'>
        <h2>Fruits</h2>
        <p>I would like one {fruit}, please</p>
        <p>Here you go {fruit}</p>

        <h3>Remaining</h3>
        <p>
          I am sorry, we're all out. We have only last {fruits.length} left:{' '}
        </p>
        <div>
          {fruits.map((fruit) => (
            <span key={Math.random()}>{fruit}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
