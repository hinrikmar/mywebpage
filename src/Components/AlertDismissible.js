import React, {useState, useEffect} from 'react';

import { Button, Alert } from 'react-bootstrap';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

export default function AlertDismissible(props) {
    const [show, setShow] = useState(true);
    const [errors, setErrors] = useState(props.errors)
    const [isSubmitting, setSubmitting] = useState(props.submit)

    useEffect(() => {
      // Update the document title using the browser API
      console.log('UseEffect')
      errors.length > 0 ? setShow(true) : setShow(false) ;
      console.log(errors.length )
      

    }, [show, errors]);
  
    return (
      <>
        <Alert show={show} variant="warning" style = {{border: "1px solid black"}}>
          <Alert.Heading>Oh no error!</Alert.Heading>
          <div style = {{textAlign: "left"}  }>
          {
            errors.map((error,i) => ( <li>{error.error}</li>))
          }
          </div>
        </Alert>
      </>
    );
  }

