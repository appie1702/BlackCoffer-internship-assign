const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const Info = require('./model');
const info = require('../dashboard/src/data/data');
const datalistRoutes = require('./routes/datalistRoutes');
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.listen(5000, console.log(`Server started on PORT 5000`));

app.get('/',(req,res)=>{
    
    //to insert json data to mongoDB

    //Info.insertMany(info).then(()=>{
    //    console.log("done adding data.")
    //}).catch((err)=>{
    //    console.log(err.message)
    //});

    res.send("message");
});

app.use('/api/datalist', datalistRoutes);
app.use(errorHandler);