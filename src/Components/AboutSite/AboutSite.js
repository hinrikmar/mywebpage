import React from 'react';
import './AboutSite.scss';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

class AboutSite extends React.Component {

  state = {
    aboutsite: []
  }

  componentDidMount(){
      fetch(new URL('aboutsite/',baseurl))
      .then(res => res.json())
      .then((data) => {
      this.setState({ aboutsite: data })
      })
      .catch(console.log)
  }

  render() {
    return (
          <div className = "aboutSite_container">
              {
                this.state.aboutsite.map((site,i) => (
                  <div key = {i.toString()}>
                    <h1>
                      {site.title}
                    </h1>
                    <p className = "aboutSite_p">
                        {site.text_about_site}
                    </p>
                    <a href="https://github.com/hinrikmar/mywebpage\">Project on github</a>
                  </div>
                ))
              }
          </div>
      );
    }
  }

export default AboutSite