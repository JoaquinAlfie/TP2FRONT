import "../assets/styles/criollo.css"

type CriolloProps = {
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Criollo({setPage}: CriolloProps) {
return (
    <div className="criollopag">
      <header className="navbar">
        <a className="volver" onClick={() => setPage("landing")}>
          <img src="/img/volver.png" alt="Logo" style={{ width: "152px", height: "78.24px" }}/>
        </a>
      </header>
        <h1 className="titulocriollo">PANCHO CRIOLLO</h1>
        <img src="/img/criollog.png" alt="Logo" className="fotocriollo" style={{ width: "817px", height: "460px" }}/>
        <p className="descripcioncriollo">
          Pancho con carne 100% de cerdo, salsa criolla y aderezo a eleccion. Suma un exclusivo auto F1 coleccionable por solo $7.499. Solo por tiempo limitado o hasta agotar stock
        </p>
        <button className="enviarcriollo" onClick={() => setPage("pedido")}>Enviar pedido</button>
    </div>
)
}

export default Criollo;