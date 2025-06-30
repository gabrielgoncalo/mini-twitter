const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get("/")

app.listen(PORT, ()=>{
    console.log(`O servidor rodando em http://localhost:${PORT}`);
});


