import React, {useState, useEffect} from 'react';

import { Alert } from 'react-bootstrap';

export default function AlertDismissible(props) {
    const [show, setShow] = useState(true);
    const [errors, setErrors] = useState(props.errors)

    useEffect(() => {
      // Update the document title using the browser API
      console.log('UseEffect')
      //errors.length > 0 ? setShow(true) : setShow(false) ;
      console.log(errors.length )
      

    }, [show, errors]);
  
    return (
      <>
        <Alert show={show} variant={errors.length > 0 ? "warning" : "success"} style = {{border: "1px solid black"}}>
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

