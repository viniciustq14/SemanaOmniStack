const express=require('express');
const routes=require('./routes')
const cors=require('cors')
app.use(cors())

const app =express();
app.use(express.json());
app.use(routes);



app.listen(5000);