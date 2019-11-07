import React from 'react'
import './Goals.scss';
import Goal from '../Goal/Goal'

require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

class Goals extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        goals: [],
      }

    componentDidMount(){
        fetch(new URL('goals/',baseurl))
        .then(res => res.json())
        .then((data) => {
            this.setState({ goals: data })
            //console.log(this.state.goals)
        })
        .catch(console.log)
    }

    render() {
    
        return (
            <div className = "main_goal_container">
                <h1>My current goals </h1>
                {   this.state.goals.map((item,i) => (
                <div>
                    <h3>{item.title}</h3>
                        <Goal id = {item.id} />                                                   
                    <div className = "goal_paragraph">
                        {item.text_description}
                    </div>
                </div>
                 ))
                } 
            </div>
        );
    }
  }

export default Goals