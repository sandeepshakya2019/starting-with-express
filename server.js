//jshint esversion:6

//to initiate the express.js
const express = require("express");
const app = express();

//now let's make the root directory of our website
app.get("/",function(request,respose){
	respose.send("<h1>you are visting the root directory of my website</h1>")
});
//create another page like about me 
app.get("/aboutme",function(request,respose){
	respose.send("<h1>You are at the about page <br> more about me visit my site webdblog.online</h1>")
});
//create the third page like contact me
app.get("/contact",function(request,respose){
	respose.send("<h1>You are at the contact page <br> conatct me at instagram @webdblog")
})
// to listen the port
app.listen(3000,function(){
	console.log("I am listening the port 3000")
}) 
//sorry from mistake since i am using the respose all the time since there is no effect beacaue we are using the same mean at the both side like