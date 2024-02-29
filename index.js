const express = require( 'express' );
const bodyParser = require('body-parser')
const dbConnect = require('./config/dbConnect');
const student = require('./routes/Student');
const course = require('./routes/course')
const { default: mongoose } = require('mongoose');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT


mongoose.connect("mongodb+srv://admin:KAgGUuPfB9dyNbqt@cluster.x434rdw.mongodb.net/Blog?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log(err))

app.use(bodyParser())
app.use(student)
app.use(course)

app.get("/", (req,res)=>{ res.send("hello man") })

app.listen(PORT, ()=>{
    console.log('server is running successfully in '+ PORT);
})