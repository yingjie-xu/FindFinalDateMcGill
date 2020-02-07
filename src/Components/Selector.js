import React, {Component} from 'react';
import ExportToCalendar from "./ExportToCalendar.js";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;
let examList = [];
var lst = [];

class Selector extends Component {
  constructor(props) {
    super(props);
    lst = this.props.courses;
    let lst2 = lst.map(course => course['COURSE NUMBER'] + '-' + course["SECTION"])
    // console.log('hi'+ lst2)
    this.state = {
      options: lst2,
      checkedList: lst2
    }
  }
  
  onChange = checkedList => {
    this.setState({
      checkedList
    });
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    let newList = nextProps.courses.map(course => course['COURSE NUMBER'] + '-' + course["SECTION"])
    if (newList !== this.state.options) {
      this.setState({ 
        options: newList,
        checkedList: newList
      });
    }
  }

  render() {
    // console.log(this.state.checkedList)
    let course_list = Object.values(this.state.checkedList);
    examList = this.props.courses.filter(course => course_list.includes(course['COURSE NUMBER'] + '-' + course["SECTION"]));
    examList = examList.map(
      c => [c["COURSE NUMBER"],
      c["SECTION"],
      c["BUILDING"],
      c["ROW"],
      c["EXAM DATE"],
      c["TIME"]]
    );
    return (
      <div>
        <CheckboxGroup 
          options={this.state.options}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
        <br />
        <ExportToCalendar exams = {examList}></ExportToCalendar>
      </div>
    );
  }
}

// class Cards extends Component{
//   render(){
//     const {courses} = this.props;
//     let course_list = [];
//     course_list = data.filter(course => {
//       return courses.includes(course['COURSE NUMBER']);
//     })
//     // console.log(course_list);
    // let examList = course_list.map(
    //   c => [c["COURSE NUMBER"],
    //   c["SECTION"],
    //   c["BUILDING"],
    //   c["ROW"],
    //   c["EXAM DATE"],
    //   c["TIME"]]
    //   );
//     return (
//       <div>
//         {course_list.length === 0 ? 
//           <div>
//           </div> 
//           : <div>
//             {course_list.map(course => <ExamCard course={course} key={course['COURSE NUMBER'] + course["SECTION"] + course["ROW"]}/>)}
//             <ExportToCalendar exams = {examList}></ExportToCalendar>
//           </div>
//         }
        
//       </div>
//     )
//   }
// }


export default Selector;