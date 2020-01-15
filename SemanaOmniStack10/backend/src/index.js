const express =require('express');
const app=express();
const mongoose =require('mongoose');
const routes=require('./routes');

mongoose.connect();
app.use(express.json());
app.use(routes);




app.listen(8010);