var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'myfirstdb'
    
});

con.connect(function(err){
    if(err) throw err;
    console.log('connection established')
    con.query("select * from school",function(err, results){
        if(err) throw err;
        console.log('results',results);
    })
})