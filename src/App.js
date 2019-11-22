import React, {Component} from 'react';
import './App.css';
import data from "./new1.json"

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      course: false,
      id: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
    document.title = "Find Exam Date McGill";
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    for (var k in data["COURSE NUMBER"]) {
      if (data["COURSE NUMBER"][k] === event.target.value.toUpperCase()) {
        this.setState({
          isCourse: true,
          id: k
        })
        break
      } else {
        this.setState({isCourse: false})
      }
    }
  }

  render() {
    let display = undefined
    if (this.state.isCourse) {
      display = "The Final Exam of "
      display += data["COURSE NUMBER"][this.state.id]
      display += " will be held on "
      display += data["EXAM DATE"][this.state.id]
      display += " at "
      display += data["TIME"][this.state.id]
      display += ". "
      if (data["NOTE"][this.state.id]) {
        display += "Note: "
        display += data["NOTE"][this.state.id]
      }
    } else {
      display = "Invalid course! Please try again with the format \"XXXX(space)XXX\"!"
    }
    return (
      <div className="App">
        <div className="bg"></div>
        <form>
          <h1>Find your final exam date (McGill Univeristy)</h1>
          <h2>Enter Course Number: </h2><input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <h2>{display}</h2>
        <p>
          Follow <a href="https://www.mcgill.ca/exams/">this </a>link to get precise info. 
          Follow <a href="https://www.mcgill.ca/exams/buildings">this </a>link to get exam location.
        </p>
      </div>
    );
  }
  
}

export default App;
