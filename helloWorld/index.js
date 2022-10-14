//npm i express para instalar codigos colaborativos y es para crear un servidor
const express = require('express');
const servidor = express(); //traigame el express como funcion
const port = 3000; //port de puerto y hay que evolucionarlo

servidor.get('/', (require,response)=>{
    response.send(`hola mundo 800000D : ${port}`);
})

servidor.listen(port,()=>{
    console.log('hola mundito');
})
