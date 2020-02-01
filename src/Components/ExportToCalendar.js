import React, { Component } from "react";
import { Button} from "antd";
import {ics} from '../libs/ics.js';

class ExportToCalendar extends Component{
    //props: string list list
    //e.g. exams = [['MATH 240', 001','Fieldhouse', '11-20', '12\/9\/2019','9:00'],...]
    render(){
    let cal = ics();
    const exams = this.props.exams;
    exams.map((exam) => //add exams to calendar
    {
      let [course, section, building, row, date, time] = exam;
      const startTime = new Date(date.concat(time));
      const endTime = new Date(startTime);
      endTime.setHours(startTime.getHours()+3); //exams are 3 hours
      //addEvent(subject, description, location, begin, end)
      cal.addEvent(course.concat('-', section),'Final Exam', building.concat(row), startTime, endTime);
    });
    let downloadCal = ()=>cal.download();
        return(
        <Button onClick={downloadCal}>Export to Calendar</Button>
        )
    }
}

export default ExportToCalendar;
