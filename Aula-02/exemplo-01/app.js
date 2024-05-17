// o node possui 2 formas de manipular módulos

// sempre utilize o ecmascript

// commom js
    // importar: utilizando o "require", ex: const express = require('express');
    // exportar: utilizando o "module.exports", ex: module.exports = () => {};

// ecmascript
    // importar: utilizando o "import", ex: import express from 'express';
    // exportar: utilizando o "export default", ex: export default () => {};

const moduleMultiplicate = require("./functions/multiplicar.js");
const moduleSum = require("./functions/somar.js");

console.log(moduleMultiplicate.multiplicar(2, 3));
console.log(moduleMultiplicate.potencia(2, 3));
console.log(moduleSum(2, 3));

const express = require('express');

const app = express();

// porta
// host: localhost | 127.0.0.xxx

app.listen(3000, '127.0.0.255', () => 
    {
        console.log('Server running at http://127.0.0.255:3000/');
    }
);
