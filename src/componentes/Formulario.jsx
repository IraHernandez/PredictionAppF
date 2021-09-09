
import React ,{useState} from "react";

function Formulario() {
  const [formState, setFormState] = useState({
    name:"",
    country:"",
  });

  const [UsePredictionstate, setUsePredictionstate] = useState({})

  const {name, country} = formState;

  const handleChange = (e) =>{
    setFormState({
      ...formState,
      [e.target.name] : e.target.value
    }
    )
  };
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!name.trim()|| !country.trim()){
      console.log("campos vacios");
      return;
    }
    getPrediction();
  };

  const getPrediction = async() => {
    const response = await fetch(`https://api.agify.io?name=${name}&country_id=${country}`)
    const data = await response.json()
    setUsePredictionstate(data)
  };
  return (
    <div className="container">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label className="mt-3">Escribe tu nombre</label>
        <input className="form-control"
          type="text"
          name="name"
          onChange={handleChange}
        >
        </input>
        <label className="mt-2">Escoge tu país</label>
        <select className="form-control"
          name="country"
          onChange={handleChange}
        >
          <option value="">--Selecciona tu país--</option>
          <option value="US">Estados Unidos</option>
          <option value="VE">Venezuela</option>
          <option value="CO">Colombia</option>
          <option value="PE">Peru</option>
          <option value="CL">Chile</option>
          <option value="EC">Ecuador</option>
          <option value="AR">Argentina</option>
        </select>
        <button type="submit" className="btn btn-outline-success mt-3 btn-block">Predecir</button>
      </form>
    </div>
  );
}

export default Formulario;