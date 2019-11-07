import React, {useState, useEffect} from 'react';
require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

function FetchValidation(props) {

    const [errors, setErrors] = useState(props)

    useEffect(() => {
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
                    this.setErrors( data )
                    console.log(this.state.errors)
                })
                .catch(console.log)
             }
        fetchData();
      }, []);

    return errors
}

export default FetchValidation;