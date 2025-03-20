
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Servicios from "./views/servicios";
import Clientes from "./views/clientes";
import './App.css';
import Encabezado from "./components/Encabezado/encabezado";


const App = () => {
  return (
      <Router>
        //Contenedor principal con margen superior
      <main className="margen-superior-main">
      <Encabezado/>    
        <Routes>
         //Definicion de rutas
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/clientes" element={<Clientes/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;