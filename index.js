const Express = require('express');
const express= new Express();
var path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const knex = require('knex');
const config = require('./knexfile.js');
const dbClient = knex(config);
var uploadRouter = require('./upload.js');
express.use(Express.static(path.join(__dirname, 'public')));

express.use(bodyParser.json());

function sendUser(request, response){
    dbClient('users')
    .select('*')
    .then(data=>{
        response.json(data)
        console.log(data)
    })
    .catch(err=>{
        response.json({status:'fail'})
    })
}

function newUser(request, response){
    dbClient('users')
        .insert({
            fname:request.body.fname,
            lname:request.body.lname,
            username:request.body.username,
            password:request.body.password
        })
        .then(val=>{response.json({status:'success'})})
        .catch(err=>{
            response.json({status:'fail'})
        })
}

function sendItem(request, response){
    dbClient('items')
    .select('*')
    .then(data=>{
        response.json(data)
        console.log(data)
    })
    .catch(err=>{
        response.json({status:'fail'})
    })
}

function addItem(request, response){
    dbClient('items')
        .insert({
            itemname:request.body.itemname,
            itemprice:request.body.itemprice,
            itemimage:request.body.itemimage,
            itemdesc:request.body.itemdesc
        })
        .then(val=>{
            response.json({status:'success'})})
        .catch(err=>{
            response.json({status:'fail'})
        })
}
express.use('/upload', uploadRouter);
express.get('/users', sendUser);
express.post('/users', newUser);
express.get('/items', sendItem);
express.post('/items', addItem);
express.listen(3000,'localhost',()=>{
    console.log("running on port 3000")
})