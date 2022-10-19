const { request } = require('express');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const res = require('express/lib/response');
const server = express();
dotenv.config();

const port = process.env.PORT;

server.get('/',(request, res)=>{
    res.send('hola mundo');
});

server.listen(port,()=>{
    console.log(`estoy en el puerto port ${port}`.rainbow.bgYellow);
})