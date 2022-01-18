const express=require('express');
const cors=require('cors');
const swaggerUi=require('swagger-ui-express');
const app=express();
const YAML=require('yamljs')
const swaggerDocs=YAML.load('./app.yaml')
app.use(cors())
var options = {
    // customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Sellers Commerce",
   customCss:
   `
   .topbar-wrapper img {
    content:url('https://res.cloudinary.com/ravikiran143/image/upload/v1642495394/New_Logo_SC_ewy0z5.png'); 
    visibility: visible;
    display: block;
    position: absolute;
   padding:5px;
   top:2px;
   height:50px; 
}

.swagger-ui .topbar {background-color:#ffffff;};

   ` 
  };

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs,options));


 app.put("/users", (req, res) => {
   const obj={id:1,name:"Ravi"}
    res.status(200).send(obj);
  });
app.get('/users',(req,res)=>{
    res.status(200).send('Customer reults')
})
app.put("/products", (req, res) => {
  res.status(200).send("Successfully updated customer");
});
app.get('/products',(req,res)=>{
  res.status(200).send('Customer reults')
})
app.listen(5000,()=>
    console.log("Server listening on port "))