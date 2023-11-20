const food = require("../models/foodschema");

const express = new require("express");
const router = new express.Router();

router.post("/fooditems",async(req,res)=>{
    try{
        const {name,calories}=req.body;
    const addfood =new food({name,calories});
    console.log(addfood);
   const resfood= await addfood.save();
  
    res.status(201).send(resfood);
    }catch(e){
   res.status(400).send(e);
    }
})
router.get("/fooditems",async(req,res)=>{
    try{
        const {name}= req.query;
        const queryObject={};
        
        if(name){
            queryObject.name= {$regex: name , $options:"i"};
        }
       const getFoods= await food.find(queryObject);
  
    res.send(getFoods);
    }catch(e){
   res.status(400).send(e);
    }
})
// for individual food item
router.get("/fooditems/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
       const getFood= await food.findById(_id);
    res.send(getFood);
    }catch(e){
   res.status(400).send(e);
    }
})
// for updation
router.patch("/fooditems/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
       const getFood= await food.findByIdAndUpdate(_id,req.body,{new: true});
    res.send(getFood);
    }catch(e){
   res.status(500).send(e);
    }
})
//for delete request
router.delete("/fooditems/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
       const getFood= await food.findByIdAndDelete(_id);
    res.send(getFood);
    }catch(e){
   res.status(500).send(e);
    }
})

router.get("/",async (res,req)=>{
    res.send("Hello from thapa");
}) 

module.exports =router;