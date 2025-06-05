
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Clientes from "./views/clientes";
import './App.css';
import Categorias from "./views/categorias"
import Encabezado from "./components/encabezado/Encabezado";
import Producto from "./views/productos";
import Ventas from "./views/ventas";
import Compras from "./views/Compras";
import Catalogo from "./views/CatalogoProductos"
import Estadistica  from "./views/Estadisticas";
import Dashboard from "./views/Dashboard";
import RutaProtegida from "./components/rutas/RutaProtegida";
import PiePagina from "./infopie/PiePagina";


const App = () => {
  return (
      <Router>
        <div className="App-wrapper">
      <Encabezado/> 
      <main className="margen-superior-main content">    
        <Routes>
         //Definicion de rutas
          <Route path="/" element={< Login/>} />

          <Route path="/inicio" element={<RutaProtegida vista={<Inicio/>}/>} />
          <Route path="/clientes" element={<RutaProtegida vista={<Clientes/>}/>} />
          <Route path="/productos" element={<RutaProtegida vista={<Producto/>}/>} />
          <Route path="/categorias" element={<RutaProtegida vista={<Categorias />}/>} />
           <Route path="/Compras" element={<RutaProtegida vista={<Compras />}/>} />
          <Route path="/ventas" element={<RutaProtegida vista={<Ventas />}/>} />
           <Route path="/CatalogoProductos" element={<RutaProtegida vista={<Catalogo />}/>} />
            <Route path="/Estadisticas" element={<RutaProtegida vista={<Estadistica />}/>} />
           <Route path="/Dashboard" element={<RutaProtegida vista={<Dashboard />}/>} />
        </Routes>
        </main>
        <PiePagina />
        </div>
    </Router>
  );
};

export default App;