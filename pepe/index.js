const express = require('express');
const servidor = express();
const fs = require('fs')

const os = require('os');
const port = 3001;

servidor.get('/', (require,response)=>{
    response.send(`
    <h1>mi pc</h1>
<ul>
    <li>estamos en el puerto : ${port}</li>
    <li>el nombre de mi pc es : ${os.hostname}</li>
    <li>el procesador de mi pc es : ${os.cpus()[0].model}</li>
    <li>la velocidad es : ${os.cpus()[0].speed}</li>
    <li>la memoria libre en bytes es : ${os.freemem()}</li>
    <li> d ${os.uptime()}</li>
    
    
</ul>
      `);
})

servidor.listen(port,()=>{
    console.log('holis');
})

//Object.values( ) para meter objetos y transformarlos en arrays