/**
 * Created by Punit Singh on 3/13/15.
 */

var express=require("express"),
    app=express(),
    fs = require('fs'),
     path    = require("path");

app.set('view engine', 'hbs');

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/cm",function(req,res){
    fs.readFile('./resources/images/logo.gif', function(img){
        res.writeHead(200, {'Content-Type': 'image/gif' });
        res.end(img,'binary');
    });
});

app.get("/cm1",function(req,res){
    var img = fs.readFileSync('./resources/images/Logo.gif');
    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary');
});

app.get("/cm2",function(req,res){
    res.writeHead(200,{'Content-Type': 'image/gif' });
    res.end();
});

app.get("/cm3",function(req,res){
    res.writeHead(204,{'Content-Type': 'image/gif' });
    res.end();
});

app.get("/jade",function(req,res){
    res.render('index',{title:'coming from jade'});
});

app.get("/hbs",function(req,res){
    res.render('index',{title:'coming from hbs'});
});



app.listen("8080");