import React from 'react';
import './AboutMe.scss';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

class AboutMe extends React.Component {

    state = {
        aboutme: []
      }

    componentDidMount(){
        fetch(new URL('aboutme/',baseurl))
        .then(res => res.json())
        .then((data) => {
        this.setState({ aboutme: data })
        
        })
        .catch(console.log)
    }

    render() {
      return (
            <div className = "aboutme__container">
                {
                    this.state.aboutme.map((item, i) => (
                        <div key = {i.toString()}>
                            <h1>
                                {item.title}
                            </h1>
                            <p>
                                {item.text_about_me}
                            </p>
                        </div>
                    ))
                }
            </div>
      );
    }
  }

export default AboutMe