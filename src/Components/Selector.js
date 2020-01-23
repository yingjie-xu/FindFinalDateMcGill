import React, {Component} from 'react';
import { Select } from 'antd';
import data from '../Assets/washed.json';

const { Option } = Select;

class Selector extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    let courses = [];
    let getTitle = (course) => Object.keys(course)[0];
    let all_courses = data.map(getTitle);
    for (let course in all_courses) {
      console.log(all_courses[course])
      courses.push(<Option key={all_courses[course]}>{all_courses[course]}</Option>);
    }
    console.log(courses.length)
    return (
      <div>
        <Select
          mode="multiple"
          style={{ width: '60%' }}
          placeholder="Please select your courses here from the list."
        >
          {courses}
        </Select>
      </div>
    )
  }
}

export default Selector;