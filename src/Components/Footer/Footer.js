import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

class Footer extends React.Component {

  render() {

    return (
          <div style = {{ 
                width: "165px",
                margin:" 0 auto",
                display: "flex",
                flexDirection: "row"}}>
              <div style = {{maxWidth: "60px"}}>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-top`}>
                      Let's catch up on facebook!
                    </Tooltip>
                }
                >
              <a href="https://www.facebook.com/hinrikmar">
                <img
                    alt=""
                    src="https://res.cloudinary.com/dusj3d8bs/image/upload/v1573251419/F_icon.svg"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                /> 
                </a>
                </OverlayTrigger>
              </div>
              <div style = {{maxWidth: "60px", paddingLeft: "15px"}}>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-top`}>
                      Follow me on instagram!
                    </Tooltip>
                }
                >
              <a href="https://www.instagram.com/hinrikmar">
                <img
                    alt=""
                    src="https://res.cloudinary.com/dusj3d8bs/image/upload/v1573251207/Instagram_logo_2016.svg"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                /> 
                </a>
                </OverlayTrigger>
              </div>
              <div style = {{maxWidth: "60px", paddingLeft: "15px"}}>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-top`}>
                    Check out my github!
                    </Tooltip>
                }
                >
                <a href="https://www.github.com/hinrikmar">
                    <img
                        alt=""
                        src="https://res.cloudinary.com/dusj3d8bs/image/upload/v1573251151/GitHub-Mark-120px-plus.png"
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    /> 
                </a>
                </OverlayTrigger>
              </div>
          </div>
      );
    }
  }

export default Footer
