import React from "react";

function Formulario() {
  return (
    <div className="container">
      <h1>Formulario</h1>
      <form>
        <label className="mt-3">Escribe tu nombre</label>
        <input className="form-control" type="text"></input>
        <label className="mt-2">Escoge tu país</label>
        <select className="form-control">
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