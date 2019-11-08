import React, { useState, useEffect }  from 'react';
import './ContactMe.scss';
import { InputGroup, FormControl, Button, Row, Col} from 'react-bootstrap';
import AlertDismissible from '../AlertDismissible';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

export default function  ContactMe() {

    const [nameInput, setNameInput] = useState(React.createRef());
    const [emailInput, setEmailInput] = useState(React.createRef());
    const [messageInput, setMessageInput] = useState(React.createRef());
    const [errors, setErrors] = useState([]);
    const [submit, setSubmit] = useState(false);
    
    useEffect(() => {
        
        if(submit){
            const fetchData = () => {
                fetch(new URL('contactme/',baseurl), {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nameInput.current.value,
                        email: emailInput.current.value,
                        message: messageInput.current.value,
                    })
                    }).then(res => res.json())
                    .then((data) => {
                        setErrors( data )
                        console.log(data)
                        if(data.length === 0){
                            nameInput.current.value = '';
                            emailInput.current.value = '';
                            messageInput.current.value = '';
                        }
                    })
                    .catch(console.log)
                }
            fetchData();
        }
        setSubmit(false);
       console.log(submit)
    }, [errors])
    

     function handleSubmit() {
        setSubmit(true);
        setErrors([]);
     }


        return (
            <div className = "ContactMe_container">
                <h1>Contact Me</h1>
                <div className = "input_form">
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Name"
                aria-label="Name"
                ref={nameInput}
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Email"
                aria-label="Email"
                ref={emailInput}
                />
                </InputGroup>
                <InputGroup className="mb-3" size = 'lg'> 
                <FormControl
                FormControl as="textarea"
                placeholder="Message"
                aria-label="Message"
                ref={messageInput}
                
                />
                </InputGroup>
                <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <Button onClick = {() => handleSubmit()}> Submit </Button>
                    </InputGroup>
                    </Col>
                { (errors.length > 0) && (<Col xs="auto"><AlertDismissible errors = {errors}/></Col>)}
                </Row>
                </div>
            </div>
        );
    }




    /*
        if(submit){
            const fetchData = async () => {
                await fetch(new URL('contactme/',baseurl), {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: '',
                        email: '',
                        message: '',
                    })
                    }).then(res => res.json())
                    .then((data) => {
                        setErrors( data )
                        console.log(errors)
                    })
                    .catch(console.log)
                }
            return fetchData();
        }
    */