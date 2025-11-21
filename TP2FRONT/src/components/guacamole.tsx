import "../assets/styles/guacamole.css"

type GuacamoleProps = {
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Guacamole({setPage}: GuacamoleProps) {
return (
    <div className="guacamolepag">
      <header className="navbar">
        <a className="volver" onClick={() => setPage("landing")}>
          <img src="/img/volver.png" alt="Logo" style={{ width: "152px", height: "78.24px" }}/>
        </a>
      </header>
      <main className="mainguacamole">
        <h1 className="tituloguacamole">PANCHO GUACAMOLE</h1>
        <img src="/img/guacamoleg.png" alt="Logo" className="fotoguacamole" style={{ width: "817px", height: "460px" }}/>
        <p className="descripcionguacamole">
          Pancho con carne 100% de cerdo, salsa guacamole aderezo a eleccion. Suma un exclusivo auto F1 coleccionable por solo $7.499. Solo por tiempo limitado o hasta agotar stock
        </p>
        <button className="enviarguacamole" onClick={() => setPage("pedido")}>Enviar pedido</button>
        </main>
    </div>
)
}

export default Guacamole;