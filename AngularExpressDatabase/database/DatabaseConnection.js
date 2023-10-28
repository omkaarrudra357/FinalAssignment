
var mssql=require('mysql');
var exp=require('express');
var app=exp(); //Initializing expresjs.
var bparser=require('body-parser');
bparserInit = bparser.urlencoded({extended:false});
var cors = require('cors'); // Import the cors middleware
app.use(cors());
app.use(exp.json());

mssqlconnection=mssql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 3306,
    database:'world'
});

function checkConnection(error)
{
    if(error == undefined)
    {
        console.log("Connected to the database...");
    }
    else
    {
        console.log("Error code:" + error.errno)
        console.log(error.message);
    }
}

function feedBack(error)
{
    if (error != undefined)
    {
        console.log(error.errno);
        console.log(error.message);
    }
    else{
        console.log("Open the browserr and visit this url http://localhost:9900/delete");
    }
}
app.listen(9900 , feedBack)
var queryresults=undefined;

function processResults(error , results)
{
    queryresults=results;
    console.log(results);
}

function displayAllUsers(request,response)
{
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('select * from users' , processResults);
    response.send(queryresults);
}


function getUserById(request,response)
{
    var userid=request.query.uid;
    mssqlconnection.query('select * from users where userid=' +userid ,processResults);
    response.send(queryresults);
}

var statusMessage=""
function checkInsertStatus(error){
    (error == undefined)?statusMessage="<b>Insert Success</b>":statusMessage="<b>Insert failure " + error.message + "</b>";
}

function insertUser(request, response){

    userid=request.body.userid;
    password = request.body.password;
    email = request.body.email;
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('insert into users values(?,?,?)',[userid,email,password], checkInsertStatus);
    response.send(statusMessage);
}


function deleteUser(request, response) {
    var userid = request.body.userid; // Assuming you send the user ID in the request body

    mssqlconnection.connect(checkConnection);

    mssqlconnection.query('DELETE FROM users WHERE userid = ?', [userid], processResults);
    response.send(queryresults);
}

function updateUser(request,response){
    userid=request.body.userid;
    password = request.body.password;
    email = request.body.email;
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('UPDATE users SET email = ?, password = ? WHERE userid = ?',[email,password,userid], checkInsertStatus);
    response.send(statusMessage);
}
/*
function updateUser(request, response){
    var userid = request.body.userid;
    var password = request.body.password;
    var emailid = request.body.emailid;
    mssqlconnection.query('Update users SET userid = ?, password = ?, emailid = ? where userid = ?', [userid, password, emailid, userid], checkUpdateStatus);
    response.send(statusMessage);
}
*/



function insertUser1(request, response){

    userid=request.body.userid;
    password = request.body.password;
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('insert into userdata values(?,?)',[userid,password], checkInsertStatus);
    response.send(statusMessage);
}

function AuthenticateUsers(request,response)
{
    //username=request.query.username;
    username = request.body.username;
    console.log(username);
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('SELECT * FROM userdata WHERE username = ?',[username], processResults);
    response.send(queryresults);
}




app.put('/update', bparserInit, updateUser);
app.post('/delete', bparserInit, deleteUser); // Define the DELETE route
app.get('/getAll',displayAllUsers);   
app.post('/authentication',bparserInit,AuthenticateUsers);          
app.get('/getById' , getUserById);
app.post('/insert', bparserInit, insertUser);
app.post('/insert1', bparserInit, insertUser1);
mssqlconnection.connect(checkConnection);
 