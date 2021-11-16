const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000
    , ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/views/login.html', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/views/register.html', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req,res) =>{
    res.redirect ("/");
});

app.post('/login', (req,res) =>{
    res.redirect ("/");
});