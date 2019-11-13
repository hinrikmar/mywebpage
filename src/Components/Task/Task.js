import React from 'react'
import './Task.scss';
import { Row, Col} from 'react-bootstrap';
const dateFormat = require('dateformat');


class Task extends React.Component {

    render() {
        const {title, startdate, enddate, img, text_description} = this.props.obj
        
        return (
                <Row className = "main_container">
                    <Col xs = "auto" className = "img_row"  > <img  className = "img_container" src={img}></img> </Col>
                    <Col xs = "auto" className = "col_container"> 
                        <Row className = "row_container_title">{title}</Row>
                        <Row className = "row_container">From: {dateFormat(startdate, "isoDate")}</Row>
                        <Row className = "row_container"> To: {dateFormat(enddate, "isoDate")} </Row>
                        <Row className = "row_container"> {text_description} </Row>
                    </Col>
                </Row>
        );
    }
  }

export default Task