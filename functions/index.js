const functions = require('firebase-functions');
const express = require('express')
const app = express()
const path = require('path')

exports.httpReq = functions.https.onRequest(app)

app.get('/', frontendHandler);

app.get('/b', backendHandler);

app.get('/home', frontendHandler);

app.get('/login', frontendHandler);

function frontendHandler(request, response){
    response.sendFile(path.join(__dirname, '/spa/index.html'))
}

function backendHandler(req, res){
    const n = Math.random() // 0-1 (not including 1)
    const num = Math.floor(n * 10); //0 - 9
    let s = 0;
    s = 50 + 12;

    //string template
    let page = `
        <h1>Your lucky number is ${num}</h1>
        Sum is ${s}
    `;

    res.send(page);
}
