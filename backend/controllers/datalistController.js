const asyncHandler = require('express-async-handler');
const Info = require('../model');

const fullDataList = asyncHandler(async (req,res)=>{
    //res.send("fulldatalist");
    try{
        const infolist = await Info.find().limit(10).sort({intensity: -1});
        res.status(200).send(infolist);
    }catch(err){
        res.status(400);
        throw new Error(err.message);
    }
})


const datalistfilter = asyncHandler(async (req,res)=>{
    var {param, value} = req.body;
    if (!param || !value){
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    param = await param.toLowerCase();
    if(!isNaN(value)){
        console.log("number");
        value = parseInt(value);
    }
    var infolist = [];
    
    try{
        if(param=="region"){
            infolist = await Info.find({region:{$regex : value, $options: "i"}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        if(param=="sector"){
            infolist = await Info.find({sector:{$regex : value, $options: "i"}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="country"){
            infolist = await Info.find({country:{$regex : value, $options: "i"}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="intensity"){
            infolist = await Info.find({intensity:{$regex : value}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="end_year"){
            infolist = await Info.find({end_year:{$regex : value}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="start_year"){
            infolist = await Info.find({start_year:{$regex : value}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="topic"){
            infolist = await Info.find({topic:{$regex : value, $options: "i"}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="likelihood"){
            infolist = await Info.find({likelihood:{$regex : value}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="source"){
            infolist = await Info.find({source:{$regex : value, $options: "i"}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        else if(param=="pestle"){
            infolist = await Info.find({pestle:{$regex : value, $options: "i"}}).sort({intensity: -1}).limit(10);
            console.log(infolist);
        }
        res.json(infolist);
    }catch(err){
        res.status(400);
        throw new Error(err.message);
    }
})


const datalistsort = asyncHandler(async (req,res)=>{
    var {param, ascen} = req.body;
    if (!param){
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    param = await param.toLowerCase();

    try{
        if(param=="region"){
            if(ascen) infolist = await Info.find({region:{$ne : ""}}).sort({region: -1}).limit(10);
            else infolist = await Info.find({region:{$ne : ""}}).sort({region: 1}).limit(10);
            console.log(infolist);
        }
        if(param=="sector"){
            if(ascen) infolist = await Info.find({sector:{$ne : ""}}).sort({region: -1}).limit(10);
            else infolist = await Info.find({sector:{$ne : ""}}).sort({region: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="country"){
            if(ascen) infolist = await Info.find({country:{$ne : ""}}).sort({country: -1}).limit(10);
            else infolist = await Info.find({country:{$ne : ""}}).sort({country: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="intensity"){
            if(ascen) infolist = await Info.find({intensity:{$ne : ""}}).sort({intensity: -1}).limit(10);
            else infolist = await Info.find({intensity:{$ne : ""}}).sort({intensity: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="end_year"){
            if(ascen) infolist = await Info.find({end_year:{$ne : ""}}).sort({end_year: -1}).limit(10);
            else infolist = await Info.find({end_year:{$ne : ""}}).sort({end_year: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="start_year"){
            if(ascen) infolist = await Info.find({start_year:{$ne : ""}}).sort({start_year: -1}).limit(10);
            else infolist = await Info.find({start_year:{$ne : ""}}).sort({start_year: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="topic"){
            if(ascen) infolist = await Info.find({topic:{$ne : ""}}).sort({topic: -1}).limit(10);
            else infolist = await Info.find({topic:{$ne : ""}}).sort({topic: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="likelihood"){
            if(ascen) infolist = await Info.find({likelihood:{$ne : ""}}).sort({likelihood: -1}).limit(10);
            else infolist = await Info.find({likelihood:{$ne : ""}}).sort({likelihood: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="source"){
            if(ascen) infolist = await Info.find({source:{$ne : ""}}).sort({source: -1}).limit(10);
            else infolist = await Info.find({source:{$ne : ""}}).sort({source: 1}).limit(10);
            console.log(infolist);
        }
        else if(param=="pestle"){
            if(ascen) infolist = await Info.find({pestle:{$ne : ""}}).sort({pestle: -1}).limit(10);
            else infolist = await Info.find({pestle:{$ne : ""}}).sort({pestle: 1}).limit(10);
            console.log(infolist);
        }
        res.json(infolist);
    }catch(err){
        res.status(400);
        throw new Error(err.message);
    }

})



module.exports = {fullDataList, datalistfilter, datalistsort};