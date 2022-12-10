const express =require("express");
const app =express();
app.get("/", function(req, res){
    res.send("hello 1")
});
app.get("/home", function(req, res){
    res.send("hello 2")
});
app.get("/login", function(req, res){
    res.send("hello 3")
});
app.listen(4500);

// const e = require("express");

// router and exprees//


// var a = 10;
// var b = 20;
// var c = 30;
// console.log(a+b+c);

// loops//
// for(i=0; i<10; i++)
// {
//     console.log(i);
// }

// Array
// const arr=[2,3,4,5]
// console.log(arr[0]);//

// how to immport and export//
// const app= require('./app')
// console.log(app);

// filter//
// const arr=[2,3,4,5,3];
// let result=arr.filter((item)=>{
//     return item===3
// })
//  console.log(result);

// //module//
// const fs= require('fs');
// fs.writeFileSync("hello.txt", "code step by step");


// ceate basic API//
// const http = require('http');
// http.createServer = ((req, resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify({name : "shweta"}));
//     resp.end();
// }).Listen(6000);

// console.log(process.argv);
// const  fs = require('fs');
// const input = process.argv;
// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinksync(input[3])
// }
// else
// {
//     console.log("invalid")
// }

// //create File//

// const fs  =  require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = '${dirPath}/appple.txt';

// fs.writeFileSync(filePath, 'this is simple txt file');


// asnyc//
// console.log('hi');
// setTimeout(()=>
// {
// console.log('hlo');
// },2000)
// console.log('welcoe');
