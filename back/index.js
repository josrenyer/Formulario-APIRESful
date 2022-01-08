
const {conn} =require("./src/db.js");
const app=require("./src/app.js");

app.listen(3001,()=>{
  console.log("conectado")
  conn.sync({ force:true }).then(()=>{
  console.log("conectado la base de datos")
  })
})

