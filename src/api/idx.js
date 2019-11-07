require('dotenv').config()

const baseurl = process.env.REACT_APP_API_URL;

async function getAboutMe(){
    
    const url = new URL('aboutme/',baseurl);
    const response = await fetch(url.href);
    const JSONgogn = response.json();

    if(!response.ok){
        console.log("gogn ekki i lagi")
    }

    return JSONgogn
}

export {
    getAboutMe,
}