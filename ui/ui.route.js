import express from 'express'
const uiRoute = express.Router();

uiRoute.get('/',(req,res)=>{
    res.render('home',{title: "Drag and Drop"});
});

uiRoute.all("*",(req,res)=>{
    res.render('404');
});

export default uiRoute