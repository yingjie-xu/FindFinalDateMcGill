import React, { Component } from "react";
import data from "../Assets/washed.json";
import ExamCard from "./ExamCard.js";
import ExportToCalendar from "./ExportToCalendar.js";
// import ExportToCalendar from "../ExportToCalendar";

class Cards extends Component{
    render(){
      const {courses} = this.props;
      let course_list = [];
      course_list = data.filter(course => {
        return courses.includes(course['COURSE NUMBER']);
      })
      // console.log(course_list);
      let examList = course_list.map(
        c => [c["COURSE NUMBER"],
        c["SECTION"],
        c["BUILDING"],
        c["ROW"],
        c["EXAM DATE"],
        c["TIME"]]
        );
      return (
        <div>
          {course_list.length === 0 ? 
            <div>
              <h2>Instructions: </h2>
              <h3>
                <p>Start by click the "add course" button
                  <br/>Type in your courses (e.g. comp 202)
                  <br/>Click the "submit" button
                  <br/>View your final schedule
                  <br/>Export exam dates to calendar
                  <br/>Note: Invalid courses will be ignored
                </p>
              </h3>
            </div> 
            : <div>
              {course_list.map(course => <ExamCard course={course} key={course['COURSE NUMBER'] + course["SECTION"] + course["ROW"]}/>)}
              <ExportToCalendar exams = {examList}></ExportToCalendar>
            </div>
          }
          
        </div>
      )
    }
}

export default Cards;