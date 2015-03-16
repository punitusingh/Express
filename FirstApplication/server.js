/**
 * Created by Punit Singh on 3/13/15.
 */

var express=require("express"),
    app=express();

app.get("/",function(req,res){
    res.render("index.jade",{title:"Hello Jade"});
});

app.listen("8080");