import React from "react";
import { Button } from "react-bootstrap";

const ContactoPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-5">
      <div className="text-center">
        <h2 className="mt-2">Cuentanos, en qué te podemos ayudar?</h2>
        <p className="mt-2">Correo:</p>
        <input className="mt-1" type="text" placeholder="minombre@ejemplo.cl" />
        <p className="mt-3">Descripción:</p>
        <input
          className="mt-1"
          type="text"
          placeholder=""
          style={{ width: "100%", height: "100px" }}
        />
        <br />
        <Button variant="danger" className="text-white mt-4">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default ContactoPage;
