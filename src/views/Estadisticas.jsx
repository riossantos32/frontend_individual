import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VentasPorMes from '../components/graficos/VentasPorMes';
import VentasPorEmpleado from '../components/graficos/VentasPorEmpleado';


const Estadisticas = () => {
const [meses, setMeses] = useState([]);
const [mesess, setMesess] = useState([]);
const [totalesPorMes, setTotalesPorMes] = useState([]);
const [totalesPventasporeempleados, setTotalesPorempleados] = useState([]);
const [empleados, setEmpleados] = useState([]); 
const [total_ventas, setTotalVentas] = useState([]);

useEffect(() => {
 cargaVentasPorEmpleado();
  cargaVentas();
}, []);

  const cargaVentas = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/totalVentasPorMes');
      const data = await response.json();

      setMeses(data.map(item => item.mes));
      setTotalesPorMes(data.map(item => item.total_ventas));
    } catch (error) {
      console.error('Error al cargar ventas:', error);
      alert('Error al cargar ventas: ' + error.message);
    }
  };


  //Método de carga de datos para el gráfico VentasPorEmpleado.
const cargaVentasPorEmpleado = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/totalventasporemppleado');
    const data = await response.json();
    setEmpleados(data.map(item => item.primer_nombre + " "+ item.primer_apellido));
    setTotalVentas(data.map(item => item.total_ventas));
  } catch (error) {
    console.error('Error al cargar ventas por empleado:', error);
    alert('Error al cargar ventas por empleado: ' + error.message);
  }
};


return (
  <Container className="mt-5">
    <br />
    <h4>Estadísticas</h4>
    <Row className="mt-4">
      <Col xs={12} sm={12} md={12} lg={6} className="mb-4">
        <VentasPorMes meses={meses} totales_por_mes={totalesPorMes} />
      </Col>

      <Col xs={12} sm={12} md={12} lg={6} className="mb-4">
  <VentasPorEmpleado empleados={empleados} total_ventas={total_ventas} />
</Col>
    </Row>
  </Container>
);

};
export default Estadisticas;