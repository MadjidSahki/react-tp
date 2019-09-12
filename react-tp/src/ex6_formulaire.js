import React, { Component } from "react";
import { render } from "react-dom";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      arrayValue: [],
      selectIndex: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectedIndex = this.selectedIndex.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }



  handleSubmit() {
    let arrayCopy = [...this.state.arrayValue];
    arrayCopy.splice(this.state.selectIndex, 0,this.state.value);
    this.setState({ arrayValue: arrayCopy });
  }

  selectedIndex(event) {
    this.setState({ selectIndex:  event.target.value  });
  }

  renderList() {
    let table = [];
    this.state.arrayValue.forEach(i => {
      table.push(
        <li key="i">{i}</li>
      )
    })
    return <ul>{table}</ul>
  }

  renderSelect(){
    let table = [];
    let index = 0
    this.state.arrayValue.forEach(i => {
      table.push(
        <option  value={index}> {i} </option>
      )
      index++;
    })
    table.push(<option key="i" value={ this.state.arrayValue.length}> En dernier </option>)
    return <select onClick={this.selectedIndex}  >{table}</select>;
  }

  render() {
    return (
      <div>
        <div className="form">
          Insérer l'élément <input type="text" value={this.state.value} onChange={this.handleChange} />
          Avant l'élément : 
          {this.renderSelect()}
          <button onClick={this.handleSubmit}>Add</button>
        </div>
        <div className="showList">
          {this.renderList()}
        </div>
      </div>
    )
  }
}



export default App;
