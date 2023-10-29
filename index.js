const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
const morgan=require("morgan")
const dotenv = require("dotenv");
const dbConfig = require('./config/database.config.js');
const userRouter=require("./routes/User.js")
const roleRouter=require("./routes/Role");
const permissionRouter=require('./routes/Permission.js')


// enable .env
dotenv.config();

// middllewares
app.use(bodyparser.json());
app.use(cors())
app.use(morgan("dev"));



mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.listen(4000, () => console.log('Express server is runnig at port no : 4000'));


// Import and use the route files
app.use('/classes', require('./routes/Classes'));
// app.use('/subjects', require('./routes/subjects'));
// app.use('/chapters', require('./routes/chapters'));
// app.use('/questionTypes', require('./routes/questionTypes'));
// app.use('/questions', require('./routes/questions'));
// app.use('/questionOptions', require('./routes/questionOptions'));
// app.use('/answers', require('./routes/answers'));
app.use('/api/auth',require("./routes/Auth.js"))
app.use("/api/users",userRouter)
app.use("/api/roles",roleRouter)
app.use("/api/permissions",permissionRouter)

//Get all employees
app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Get an employees
app.get('/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an employees
app.delete('/employees/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an employees
app.post('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted employee id : '+element[0].EmpID);
            });
        else
            console.log(err);
    })
});

//Update an employees
app.put('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});
