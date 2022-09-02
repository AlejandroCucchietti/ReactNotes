import './App.css';
import VestlaLogo from "./imagenes/VestlaLogoWeb.png"
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="App-tareas">
      <div className="vestla-logo-contenedor">
        <img
        src={VestlaLogo}
        className="vestla-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
           
    </div>
  );
}

export default App;
