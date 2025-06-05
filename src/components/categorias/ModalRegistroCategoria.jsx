// ModalRegistroCategoria.jsx
import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalRegistroCategoria = ({
  mostrarModal,
  setMostrarModal,
  nuevaCategoria,
  manejarCambioInput,
  agregarCategoria,
  errorCarga,
}) => {

 const validarletras = (e) => {
    const charcode = e.which ? e.which : e.keyCode;

    // Permitir solo letras [A-Z], a-z]
    if (
        (charcode < 65 || charcode <= 90) || // Letras mayúsculas
        (charcode < 97 || charcode <= 122) || // Letras minúsculas
        charcode !== 8 && // Retroceso
        charcode !== 46 && // Retroceso
        charcode !== 9// Tab
    ) {
        e.preventDefault();
    }
};

const validacionFormulario = () => {
    return {
        nuevaCategoria: {
            nombre_categoria: nuevaCategoria.nombre_categoria.trim(),
            descripcion_categoria: nuevaCategoria.descripcion_categoria.trim(),
            primer_apellido: nuevaCategoria.primer_apellido.trim(),
            segundo_apellido: nuevaCategoria.segundo_apellido.trim(),
            direccion: nuevaCategoria.direccion.trim(),
            cedula: nuevaCategoria.cedula.trim()
        }
    };
};

  return (
    <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nueva Categoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formNombreCategoria">
            <Form.Label>Nombre de la Categoría</Form.Label>
            <Form.Control
              type="text"
              name="nombre_categoria"
              value={nuevaCategoria.nombre_categoria}
              onChange={manejarCambioInput}
              onKeyDown={validarletras}
              placeholder="Ingresa el nombre (máx. 20 caracteres)"
              maxLength={20}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionCategoria">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion_categoria"
              value={nuevaCategoria.descripcion_categoria}
              onChange={manejarCambioInput}
              onKeyDown={validarletras}
              placeholder="Ingresa la descripción (máx. 100 caracteres)"
              maxLength={100}
            />
          </Form.Group>
          {errorCarga && (
            <div className="text-danger mt-2">{errorCarga}</div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
          setMostrarModal(false);
        }}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={agregarCategoria}>
          Guardar Categoría
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroCategoria;