import React, { Component } from "react";
import { Select, Option} from "antd";
class SelectCourse extends Component{
    render(){
    //props: string list
    //e.g. ["ACCT 351 - 001", "ACCT 351 - 002", "ECSE 321 - 001"]
    const {courses} = this.props;
        return(
        <Select mode="multiple" placeholder="Please select exams">
            {courses.map(item => <Option value={item}>{item}</Option>)}
        </Select>
        )
    }
}

class CardGroup extends Component{

}            