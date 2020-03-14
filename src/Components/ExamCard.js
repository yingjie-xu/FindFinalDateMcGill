import React, { Component } from "react";
import { Card, Col} from "antd";
import { ClockCircleOutlined,HomeOutlined } from '@ant-design/icons';
// <Row gutter={[24, 24]}>
//TODO: make card content prettier, add icons or grids
class ExamCard extends Component{
    render(){
        const {course} = this.props;
        return(
            <Col lg={12} md={24} style={{padding:'10px'}}>
                <Card title={`${ course["COURSE NUMBER"] }-${course["SECTION"]} ${course["TITLE"]}`} bordered={true}>
                    <ClockCircleOutlined /> &nbsp;
                    {course["EXAM DATE"]} {course["TIME"]}
                    <br />
                    <HomeOutlined /> Building & Room: Coming Soon!
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
