import React, { Component } from "react";
import data from "../Assets/washed.json";
import ExamCard from "./ExamCard.js";
// import ExportToCalendar from "../ExportToCalendar";

class Cards extends Component{
    render(){
      const {courses} = this.props;
      let course_list = [];
      course_list = data.filter(course => {
        return courses.includes(course['COURSE NUMBER']);
      })
      console.log(course_list)
      return (
        <div>
          {course_list.map(course => <ExamCard course={course} key={course['COURSE NUMBER'] + course["SECTION"] + course["ROW"]}/>)}
          {/* <ExportToCalendar exams={course_list}/> */}
        </div>
      )
    }
}

export default Cards;