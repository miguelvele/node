
const fs = require('fs')

const port = 5000;

fs.writeFile("C:/Users/SENA/AppData/Local/Temp/becerra.txt","hola becerra i loveeee holiii",(error)=>{
    if (error) {
        throw error;
    }
})