import React from 'react';
import Task from '../Task/Task'
import './Tasks.scss';
import {Container } from 'react-bootstrap';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

class Tasks extends React.Component {

    state = {
        tasks: []
      }

    componentDidMount(){
        fetch(new URL('tasks/',baseurl))
        .then(res => res.json())
        .then((data) => {
        this.setState({ tasks: data })
        })
        .catch(console.log)
    }


    render() {
      return (
            <div className = "tasks_container">
                    <h1>What have I done? </h1>
                    <div className = "task_container">
                        <div>
                        {
                            this.state.tasks.map((item, i) => (
                                <Task obj = {item} key = {i.toString()} />
                            ))
                        }
                       </div>
                    </div>
            </div>
      );
    }
  }

export default Tasks