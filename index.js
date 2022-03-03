const express= require('express');
const app = express();
const mongoose=  require('mongoose');
const dbUrl = 'mongodb://localhost:27017/live-class';
const bodyParser = require('body-parser');

mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("CONNECTON ERROR!!");
        console.log(err);
    })

    
    app.use(express.urlencoded({extended:true}));

    app.use(bodyParser.json())

    const Routes = require("./routes/routes");

    app.use('/',Routes);
    app.listen(3000,() =>{
        console.log("SERVING YOUR APP!");
    })




