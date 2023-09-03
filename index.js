const express = require("express");

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, i just receive a request');
    const url = requestObject.url;
    responseObject.setHeader("content-type", "text/html");

    
    responseObject.write('<h1>WELCOM TO YOUR NEW SERVER</h1> \n');
    

    responseObject.end();
};


const handleHomeRequest = (req, res) => {
    res.send("<h1> Welcome to your home page 2</h1>");
}

const handleLoginRequest = (req, res) => {
    res.send("<h2> Enter your name and Password </h2>");
}

const handleSignupRequest = (req, res) => {
    res.send("<h2> Enter your details </h2>");
}

const handleProfileRequest = (req, res) => {
    res.send("<h2> This is your profile page </h2>");
}

const handleProfileDataRequest = (req, res) => {
    res.send("<h2> This is your profile information page </h2>");
}

const handleContactRequest = (req, res) => {
    res.send("<h2> This is your contact page </h2>");
}

const handlePersonalInfoRequest = (req, res) => {
    res.send("<h2> This is your personal data page </h2>");
}
 
const server = express();
server.patch('/profile/data', handleProfileDataRequest);
server.delete('/contact', handleContactRequest);
server.put('/info', handlePersonalInfoRequest);  
server.get('/login', handleLoginRequest);
server.post('/login', handleLoginRequest);
server.post('/signup', handleSignupRequest);
server.use('/profile', handleProfileRequest);
//server.use('/', handleHomeRequest);
//server.use(handleAllRequests);

server.listen(3000, ()=>console.log('server is ready to accept request'));