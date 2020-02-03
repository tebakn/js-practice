const Client =require("pg").Client
var express = require('express');
var app = express();



app.get("/listtable",(req,res)=>{
    client=new Client({
        user: "postgres",
        password:"1234",
        host:"desk-naman",
        port:5432,
        database:"postgres"
    })

    client.connect()
    .then(()=>{console.log("WOHOO")})
    .then(()=>client.query("Select * from first_table limit 5;"))
    .then(result=>{console.log(result.rows);res.end(JSON.stringify(result.rows))})
    .catch((e)=>{console.log(e); client.end()})

})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })