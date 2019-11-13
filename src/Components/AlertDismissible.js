import React, {useState} from 'react';

import { Alert } from 'react-bootstrap';

export default function AlertDismissible(props) {
    const [show] = useState(true);
    const [errors] = useState(props.errors)
  
    return (
      <>
        <Alert show={show} variant={errors.length > 0 ? "warning" : "success"} style = {{border: "1px solid black"}}>
          <Alert.Heading>Oh no error!</Alert.Heading>
          <div style = {{textAlign: "left"}  }>
          {
            errors.map((error,i) => ( <li key={i.toString()}>{error.error}</li>))
          }
          </div>
        </Alert>
      </>
    );
  }

