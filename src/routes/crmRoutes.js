import { addNewContact } from "../controllers/crmControllers";




const routes=(app)=>{
    app.route("/contact")
    .get((req,res,next)=>{
        //middleware
        console.log(`the url is : ${req.originalUrl}`);
        console.log(`the method is : ${req.method}`)
        next();}
        ,(req,res,next)=>{
    res.send(`get request successful`)})
    
    .post(addNewContact);



    app.route("/contact/:contactID")

    .put((req,res)=>{
        res.send(`put request successful`)
    })

    .delete((req,res)=>{
        res.send(`delete request successful`)
    })
}

export default routes