import React, { Component } from "react";
import { Card, Col} from "antd";
// <Row gutter={[24, 24]}>
//TODO: make card content prettier, add icons or grids
class ExamCard extends Component{
    render(){
    const {course} = this.props;
        return(
            <Col md={12} xs={24}>
                <Card title={`${ course["COURSE NUMBER"] } ${course["TITLE"]} ${course["SECTION"]}`} bordered={false}>
                    {course["EXAM DATE"]} {course["TIME"]} at {course["BUILDING"]} {course["ROOM"]} 
                    <br />
                    Row {course["ROW"]} From {course["FROM"]} To {course["TO"]}
                </Card>
            </Col>
        )

       
    }
}

export default ExamCard;
