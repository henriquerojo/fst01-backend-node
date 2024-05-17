// o node possui 2 formas de manipular módulos

// sempre utilize o ecmascript

// commom js
    // importar: utilizando o "require", ex: const express = require('express');
    // exportar: utilizando o "module.exports", ex: module.exports = () => {};

// ecmascript
    // importar: utilizando o "import", ex: import express from 'express';
    // exportar: utilizando o "export default", ex: export default () => {};

import * as multiplicar from "./functions/multiplicar.js";
// import { multiplicar, potencia } from "./functions/multiplicar.js";
import moduleSum from "./functions/somar.js";
import moduleSub from "./functions/subtrair.js";
import moduleDiv from "./functions/dividir.js";

console.log(multiplicar.multiplicar(2, 3));
console.log(multiplicar.potencia(2, 3));
console.log(moduleSum(2, 3));

import express, { response } from 'express';

const app = express();

app.get("/", (request, response) =>{
        response.status(200).send("Hello World");
});

app.get("/data", (req, res) =>
{
    res.status(200).json({
        id: 1,
        name: "Henrique",
        age: 20
    })
});

// porta
// host: localhost | 127.0.0.xxx

app.listen(3000, '127.0.0.255', () => 
    {
        console.log('Server running at http://127.0.0.255:3000/');
    }
);
