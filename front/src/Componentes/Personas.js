import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"


export default function Personas() {

	const [Agregados, setAgregados]=useState([]);

	async function getData(){
		let info= await axios.get("http://localhost:3001/");
		setAgregados(info.data)
	}

	useEffect(()=>{
    getData();
  	},[])

	if(Agregados.length>0){
		return (
    	<div className="Data">
      		<h1>Personas Agregadas a la Base de Datos</h1>
      		<div>
      			{Agregados.map((e)=>(
      			<ul key={e.id}>
      				<li><b>ID: </b>{e.id}</li>
      				<li><b>Nombre: </b>{e.nombre}</li>
      				<li><b>Apellido: </b>{e.apellido}</li>
      				<li><b>Edad: </b>{e.edad}</li>
      				<li><b>Pais: </b>{e.pais}</li>
      			</ul>
      			))}
      			<br/>
      		</div>
      		<Link to='/'><button>Volver al Formulario</button></Link>
    	</div>
  		);
  	}else{
  		return (<div className="Data">
  			<h1>No hay Personas agregadas</h1>
  			<Link to='/'><button>Volver al Formulario</button></Link>
  		</div>
  		) 
  	}
}