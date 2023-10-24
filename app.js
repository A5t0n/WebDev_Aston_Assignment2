const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db/mongodb');
const { setupRoutes } = require ('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Welcome to Dresstore application")
});

connectToDatabase();
setupRoutes(app);

app.listen(port,()=>{
    console.log('Server is running on port 3000');
})
