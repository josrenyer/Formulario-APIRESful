const express=require("express");
const router=express.Router();
const {user}=require("../db.js")


router.get("/", async(req, res)=>{

	let personas=await user.findAll();

	res.send(personas)
	
});

router.post("/datos", async(req,res)=>{
	let {nombre,apellido,edad,pais}=req.body;

	if(nombre && apellido && edad && pais){
		let valor=await user.create({
			nombre,
			apellido,
			edad,
			pais
		})
		return res.send(valor)
	}
	res.status(410).send("por favor ingresa los valores solicitados (name,apellido,edad y pais)")
})

module.exports=router;