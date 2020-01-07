import React, {Component} from 'react';
import './App.css';
import { Row, Icon, Select } from 'antd'

const { Option } = Select;

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Row>
          <h1>Find your final exam date (McGill Univeristy)</h1>
          <Select style={{ width: '60%' }}
            mode="multiple"
            placeholder="..."
          >
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="blue1">Blue1</Option>
            <Option value="blue2">Blue2</Option>
            <Option value="blue3">Blue3</Option>
            <Option value="blue4">Blue4</Option>
            <Option value="blue5">Blue5</Option>
            <Option value="blue6">Blue6</Option>
            <Option value="blue7">Blue7</Option>
            <Option value="blue8">Blue8</Option>
          </Select>
          <p>
            Follow <a href="https://www.mcgill.ca/exams/" target='_blank' rel="noopener noreferrer">this </a>link to get precise info. 
            Follow <a href="https://www.mcgill.ca/exams/buildings" target='_blank' rel="noopener noreferrer">this </a>link to get exam location.
            View the project on <a href='https://github.com/yingjie-xu/FindFinalDateMcGill' target='_blank' rel="noopener noreferrer"><Icon type='github' /></a>
          </p>
        </Row>
      </div>
    );
  }
  
}

export default App;