import React, { Component } from "react";
import data from "../Assets/washed.json";
import ExamCard from "./ExamCard.js";

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
          {course_list.map(course => <ExamCard course={course}/>)}
        </div>
      )
    }
}

export default Cards;