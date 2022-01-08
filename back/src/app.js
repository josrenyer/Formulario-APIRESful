const express=require("express");
const morgan=require("morgan"); //registra las solicitudes HTTP para Node.js.
const routes=require("./routes/") // rutas

const app=express();

//middleware

app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  next();
});
app.use("/", routes);


module.exports=app;
