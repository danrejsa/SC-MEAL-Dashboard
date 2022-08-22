require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const PORT = process.env.PORT || 50000;
const db = require('./config/db');
const router = require('./routes/routes');
const app = express();

//Middlewares
app.use(morgan('combined'));
app.use('/api/v1', router);


app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.render('signin');
  });

app.get('/dashboard', (req, res)=>{
    res.render('dashboard');
});
app.get('/nhf-dashboard', (req, res)=>{
    res.render('nhf-dashboard');
});
app.get('/giz-dashboard', (req, res)=>{
    res.render('giz-dashboard');
});
app.get('/eu-dashboard', (req, res)=>{
    res.render('eu-dashboard');
});
app.get('/create-project', (req, res)=>{
    res.render('createproject');
});
app.get('/create-indicator', (req, res)=>{
    res.render('add-indicator');
});
app.get('/indicators', (req, res)=>{
    res.render('view-indicator');
});
app.get('/home', (req, res)=>{
    res.render('index');
});
app.get('/impact', (req, res)=>{
    res.render('widget');
});
app.get('/upload-mov', (req, res)=>{
    res.render('mov');
});
app.get('/upload-toolkits', (req, res)=>{
    res.render('toolkits');
});
app.get('/project', (req, res)=>{
    res.render('view-project');
});
app.get('/create-user', (req, res)=>{
    res.render('register');
});
app.get('/edit-indicator', (req, res)=>{
    res.render('edit-indicator');
})

//Database
try {
    db.authenticate();
    console.log('Database Connected successfully');
} catch (e) {
    console.log('Something went wrong');
    console.log(e);
}

app.listen(PORT, ()=>{
    console.log("Server Running at 5000");
});