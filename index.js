// var mysql = require('./connection');

// var con = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'myfirstdb'
    
// });

// con.connect(function(err){
//     if(err) throw err;
//     console.log('connection established')
//     con.query("select * from school",function(err, results){
//         if(err) throw err;
//         console.log('results',results);
//     })

var con = require("./connection")
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/register",function(res,res){
    res.sendFile(__dirname+'/register.html')
})

app.post("/register",function(req,res){
    console.log(req.body)
    var name = req.body.name;
    var email = req.body.email;
    var mno = req.body.mno;

    con.connect(function(err){
        if(err) throw err;
        var sql = "INSERT INTO `students`(`id`, `Name`, `Email`, `MobileNo`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')";
        con.query(sql,function(err,result){
            if(err) throw err;
            res.send(`Studens Register Successsfully` + result.insertId);
        })
    })

}).listen(7000)