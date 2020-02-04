const Client =require("pg").Client
var express = require('express');
var app = express();
app.use(express.json())



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
    .then(result=>{console.log(result.rows);res.send(JSON.stringify(result.rows))})
    .catch((e)=>{console.log(e); client.end()})

})

app.get("/listtable/:searchparam",(req,res)=>{
    client=new Client({
        user: "postgres",
        password:"1234",
        host:"desk-naman",
        port:5432,
        database:"postgres"
    })
    search=req.params.searchparam.split(':')
    client.connect()
    .then(()=>{console.log("WOHOO")})
    .then(()=>client.query(`Select * from first_table where ${search[0]}='${search[1]}';`))
    .then(result=>{console.log(result.rows);res.end(JSON.stringify(result.rows))})
    .catch((e)=>{console.log(e); client.end()})

})

app.post("/listtable",(req,res)=>{
    client=new Client({
        user: "postgres",
        password:"1234",
        host:"desk-naman",
        port:5432,
        database:"postgres"
    })
    //console.log(req.body)
    insobj=req.body.details
    client.connect()
    .then(()=>{console.log("WOHOO")})
    .then(()=>{
        if (insobj["email"]===undefined)
            client.query(`Insert into first_table(first_name,last_name,gender,dob,country) \
            values ('${insobj.first_name}','${insobj.last_name}','${insobj.gender}','${insobj.dob}','${insobj.country}');`)})
    .then(()=>res.send("chal toh rha hai"))
    .catch((e)=>{console.log(e); client.end()})
})

app.delete("/listtable/:id",(req,res)=>{
    client=new Client({
        user: "postgres",
        password:"1234",
        host:"desk-naman",
        port:5432,
        database:"postgres"
    })
    client.connect()
    .then(()=>{console.log("WOHOO")})
    .then(()=>client.query(`delete from first_table where id='${req.params.id}';`))
    .catch((e)=>{console.log(e); client.end()})

})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })