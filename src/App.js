import React, {Component} from 'react';
import './App.css';
import { Input, Row, Icon, Col, Select } from 'antd'

const { Option } = Select;

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Row>
          <h1>Find your final exam date (McGill Univeristy)</h1>
          <Select
            mode="multiple"
            placeholder="..."
          >
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
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