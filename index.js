const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/get-orders',(req, res)=>{
    res.send('Order detail Service...');
})
const server =  app.listen(1234, err=>{
    if(err){
        console.log('Error in Order Server Start ', err);
    }
    else{
        console.log('ORDER Server Start ',server.address().port);
    }
})
module.exports = app;