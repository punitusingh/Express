/**
 * Created by Punit Singh on 3/13/15.
 */

var express=require("express"),
    app=express(),
    fs = require('fs'),
     path    = require("path");


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/cm",function(req,res){
    var img = fs.readFileSync('./resources/images/logo.gif');
    res.writeHead(204, {'Content-Type': 'image/gif' });
    res.end(img,'binary');
});

app.get("/cm1",function(req,res){
    var img = fs.readFileSync('./resources/images/Transparent.gif');
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

app.listen("8080");