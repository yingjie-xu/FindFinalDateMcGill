import React, { Component } from "react";
import { Button} from "antd";
import {ics} from './ics.js';

class ExportToCalendar extends Component{
    //props: string list list
    //e.g. exams = [['MATH 240 - 001', 'location':'Fieldhouse', 'row': '11-20', 'date':'12\/9\/2019', time:'9:00'],...]
    render(){
    let cal = ics();
    const exams = this.props.exams;
    exams.map((exam) => //add exams to calendar
    {
      let [name, location, row, date, time] = exam;
      const startTime = new Date(date.concat(time));
      const endTime = new Date(startTime);
      endTime.setHours(startTime.getHours()+3); //exams are 3 hours
      cal.addEvent(name,'Final Exam', location.concat(row), startTime, endTime);
    });
    let downloadCal = ()=>cal.download();
        return(
        <Button onClick={downloadCal}>Export to Calendar</Button>
        )
    }
}
