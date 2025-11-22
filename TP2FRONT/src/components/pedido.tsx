import "../assets/styles/pedido.css"
import React, { useState } from "react";

type PedidoProps = {
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Pedido({setPage}: PedidoProps) {
      const [codigo, setCodigo] = useState("");
      const [direccion, setDireccion] = useState("");
      const [depto, setDepto] = useState("");
      const [error, setError] = useState("");

            const handlePedir = async () => {
        if (!codigo || !direccion || !depto) {
          setError("Todos los campos son obligatorios");
          return;
        } else {
          alert("Compra completada con éxito. Aguarda tu pedido.");
        }
      }
return (
    <div className="pedidopag">
      <header className="navbar">
        <a className="volver" onClick={() => setPage("landing")}>
          <img src="/img/volver.png" alt="Logo" style={{ width: "152px", height: "78.24px" }}/>
        </a>
      </header>
      <main className="mainpedido">
        <h1 className="enviatitulo">ENVIA TU PEDIDO</h1>
        <section className="codigo">
          <input id="codigo1" name="codigo" placeholder="Codigo postal" maxLength={20} value={direccion} onChange={(e)=> setDireccion (e.target.value)}/>
        </section>
        <section className="direccion">
          <input id="direccion1" name="direccion" placeholder="Dirección" maxLength={20} value={direccion} onChange={(e)=> setDireccion (e.target.value)}/>
        </section>
        <section className="departamento">
          <input id="departamento1" name="departamento" placeholder="Departamento" maxLength={20} value={depto} onChange={(e)=> setDepto (e.target.value)}/>
        </section>
        <button className="comprar"onClick={handlePedir}>COMPRAR</button>
      </main>
      {error && <p className="obligatorios1">{error}</p>}
    </div>
)
}

export default Pedido;