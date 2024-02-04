const express = require('express');
const app = express();


app.get('/name', (req, res)=>{
    res.send("Sadek")
})


const port = 3000;

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})