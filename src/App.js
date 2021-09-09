import './index.css';
import Formulario from "./componentes/Formulario"

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Predicción edad y localización</h1>
      <hr/>
      <Formulario/>
    </div>
  );
}

export default App;
