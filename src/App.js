import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Building from './Building';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { id: '', name: '' } };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    var updatedData = this.state.data;
    updatedData[event.target.name] = event.target.value

    this.setState({
      data: updatedData
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("https://sheetsu.com/apis/v1.0su/7482a2cc43c7", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(this.state.data)
    }).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json);
    });
  }

  render() {
    return (
      
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="id"
            value={this.state.data.id}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="name"
            value={this.state.data.name}
            onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>
        <Building />  
      </div>

    );
  }

}

export default App;
