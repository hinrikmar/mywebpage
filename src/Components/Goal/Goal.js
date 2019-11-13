import React from 'react'
import './Goal.scss';
import { Row, Col} from 'react-bootstrap';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

class Goal extends React.Component {

    state = {
        tasks: []
    }

    componentDidMount(){
        fetch(new URL('goals/'+this.props.id,baseurl))
        .then(res => res.json())
        .then((data) => {
            this.setState({ tasks: data })
        })
        .catch(console.log)
    }
    render() {
        if(this.state.tasks.length < 1) return(<div/>);
        return (
            <Row className = "goal_row" md = {3}>
                {
                this.state.tasks.map((task,i) => (
                        <Col xs = {4} key = {i.toString()}>
                            <Row float="center">
                                <div className = "goal" >
                                    {task.task}
                                </div>
                            </Row>
                            <Row >
                                <div className = "goal">
                                    <img className = "goal_img_container" src={task.img} alt="" ></img>
                                </div>
                            </Row>
                        </Col>
                ))
                }
            </Row>
        );
    }
  }

export default Goal