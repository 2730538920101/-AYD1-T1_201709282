const express = require('express');
const router = express.Router();

let a;
let b;
let result; 

router.post('/calculadora', (req, res)=>{
    a = 2;
    b = 2;
    result = {
        "resultado":a+b
    }
    const msj = {"mensaje":"CALCULO REALIZADO"}
    res.send(msj);
});

router.get('/info', (req,res)=>{
    res.send(result);
});

module.exports = router;