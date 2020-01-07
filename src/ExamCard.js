import React, { Component } from "react";
import { Card, Col} from "antd";
// <Row gutter={[24, 24]}>
//TODO: make card content prettier, add icons or grids
class ExamCard extends Component{
    render(){
    const {subj,title, section,date, time, building, room, row, from, to} = this.props;
        return(
        <Col md={12} xs={24}>
            <Card title={`${subj} ${title} ${section}`} bordered={false}>
                {date} {time} at {building} {room}
                Row {row} From {from} To {to}
            </Card>
            </Col>
        )
    }
}

class CardGroup extends Component{

}
