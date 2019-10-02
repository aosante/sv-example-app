const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Sample route');
})

//register a user
app.post('/register', (req, res) => {
    // register the user 
})