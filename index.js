import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";


const app=express();
const PORT=4000;


//mongo connection
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//body parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app)

app.get("/",(req,res)=>
res.send(`yeah ${PORT}`)
);

app.listen(PORT,()=>
{
    console.log(`the server is running at the port ${PORT}`)
}
);

