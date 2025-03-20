
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Servicios from "./views/servicios";
import './App.css';
import Encabezado from "./components/login/Encabexado/encabezado";


const App = () => {
  return (
      <Router>
      <main className="margen-superior-main">
      <Encabezado/>    
        <Routes>
         
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/clientes" element={<clientes/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;