import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function Formulario() {

    const [pais, setPais]=useState([]);
    const urlInicial="https://restcountries.com/v3/all";

    const [inputBody , setInputBody] = useState({
    nombre:"",
    apellido:"",
    edad:"",
    pais:"",

  })


    //console.log(inputBody)

  async function getApi(url){
    let api= await axios.get(url)
    let data=api.data;
    let order=data.sort(function (a, b) {
                      if (a.name.common > b.name.common) {
                        return 1;
                      }
                      if (a.name.common < b.name.common) {
                        return -1;
                      }
                      return 0;
                });
    setPais(order)
  }

  function handelInput(e){
    e.preventDefault()
    setInputBody({
      ...inputBody,
      [e.target.name]:e.target.value
    })

  }

  function handelSelect(e){
    e.preventDefault()
    setInputBody({
      ...inputBody,
      [e.target.name]:e.target.value
    })
  }

  function handelSubmit(e){
    e.preventDefault()
    if(inputBody.nombre==="" || inputBody.apellido==="" || inputBody.edad===""){
      return alert("Por favor rellene todos los campos")
    }else{
    alert("Datos agregados a la DB")
    //console.log(inputBody)
    axios.post(`http://localhost:3001/datos`, inputBody)
    setInputBody({
      name:"",
      apellido:"",
      edad:"",
      pais:""
    })
  }
  }

    useEffect(()=>{
    getApi(urlInicial);
  },[])


  return (
    <div className="App">
      <h1>Formulario</h1>
      <div>
        <form onSubmit={e=>handelSubmit(e)}>
            <label>Nombre</label>
            <input type="text" placeholder="Ingrese el nombre" name="nombre" onChange={e=>handelInput(e)}/>
              <br/>
            <label>Apellido</label>
            <input type="text" placeholder="Ingrese el Apellido" name="apellido" onChange={e=>handelInput(e)}/>
              <br/>
            <label>Edad</label>
            <input type="number" placeholder="Ingrese el nombre" name="edad" onChange={e=>handelInput(e)}/>
              <br/>
            <label>Pais</label>
            <select name="pais" onChange={e=>handelSelect(e)}>
            {pais.map((e)=>(
            <option key={e.cca3} value={e.name.common}>{e.name.common}</option>))
            }
            </select>
            <br/>
            <button type="submit">Agregar a la DB</button>
          </form>
      </div>
      <Link to='/Data'><button>Personas Agregadas</button></Link>
    </div>
  );
}
