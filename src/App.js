import React, {Component} from 'react';
import './App.css';
import { Icon } from 'antd'
import Input from './Components/Input';

class App extends Component {
  render() {
    return (
      <div className="app"> 
        <h1>Final Exam Date Finder (McGill Univeristy)</h1>
        <p>
          <a href="https://www.mcgill.ca/exams/" target='_blank' rel="noopener noreferrer">precise info </a> |
          <a href="https://www.mcgill.ca/exams/buildings" target='_blank' rel="noopener noreferrer"> exam location </a> |
          <a href='https://github.com/yingjie-xu/FindFinalDateMcGill' target='_blank' rel="noopener noreferrer"> <Icon type='github' /> </a>
        </p>
        <div id="input">
          <Input /> 
        </div>
      </div>
    );
  }
  
}

export default App;