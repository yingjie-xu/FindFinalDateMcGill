import React, { Component } from "react";
import { Card, Col, Icon} from "antd";
// <Row gutter={[24, 24]}>
//TODO: make card content prettier, add icons or grids
class ExamCard extends Component{
    render(){
        const {course} = this.props;
        return(
            <Col lg={12} md={24} style={{padding:'10px'}}>
                <Card title={`${ course["COURSE NUMBER"] }-${course["SECTION"]} ${course["TITLE"]}`} bordered={true}>
                    <Icon type="clock-circle" /> &nbsp;
                    {course["EXAM DATE"]} {course["TIME"]}
                    <br />
                    <Icon type="home" /> Building & Room: Coming Soon!
                    {
                    /* <Icon type="home" />&nbsp; {course["BUILDING"]} {course["ROOM"]} 
                    <br />
                    Row {course["ROW"]} From {course["FROM"]} To {course["TO"]} */
                    }
                </Card>
            </Col>
        )       
    }
}

export default ExamCard;
