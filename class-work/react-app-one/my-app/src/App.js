import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent'
import MyNumber from './components/MyNumber'
import List from './components/List'
import Textbox from './components/Textbox'
import Checkbox from './components/Checkbox'
import ListItem from './components/ListItem'
import Axios from './components/Axios'

class App extends React.Component {

styles = {
  border: '3px solid orange'
}

state = {
  myNum: Math.floor(Math.random()*100),
  ListItem: [
    {id: 1, name: 'Zelda'},
    {id: 2, name: 'Yoshi'},
    {id: 3, name: 'Mario'}
  ]
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyFirstComponent />
        <MyFirstComponent />

        <MyNumber />

        <p style={this.styles}>number is: {this.state.myNum}</p>
        <ListItem ListItem={this.state.ListItem}/>

        <Checkbox />

        <Textbox />

        <List />

        <Axios />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
