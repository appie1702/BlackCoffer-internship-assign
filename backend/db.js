const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`Mongo DB connected: ${conn.connection.host}`);
    }catch(err){
        console.log(`Error: ${err.message}`);
    }
}

module.exports = connectDB;