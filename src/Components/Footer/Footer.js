import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import './AboutSite.scss';


class Footer extends React.Component {

  render() {

    return (
          <div style = {{ 
                width: "165px",
                margin:" 0 auto",
                display: "flex",
                flexDirection: "row"}}>
              <div style = {{maxWidth: "60px"}}>
              <a href="https://www.facebook.com/hinrikmar">
                <img
                    alt=""
                    src="https://res.cloudinary.com/dusj3d8bs/image/upload/v1573251419/F_icon.svg"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                /> 
                </a>
              </div>
              <div style = {{maxWidth: "60px", paddingLeft: "15px"}}>
              <a href="https://www.instagram.com/hinrikmar">
                <img
                    alt=""
                    src="https://res.cloudinary.com/dusj3d8bs/image/upload/v1573251207/Instagram_logo_2016.svg"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                /> 
                </a>
              </div>
              <div style = {{maxWidth: "60px", paddingLeft: "15px"}}>
              <a href="https://www.github.com/hinrikmar">
                <img
                    alt=""
                    src="https://res.cloudinary.com/dusj3d8bs/image/upload/v1573251151/GitHub-Mark-120px-plus.png"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                /> 
                </a>
              </div>
          </div>
      );
    }
  }

export default Footer
