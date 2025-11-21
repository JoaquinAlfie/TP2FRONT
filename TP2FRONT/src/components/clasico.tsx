import "../assets/styles/clasico.css"

type ClasicoProps = {
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Clasico({setPage}: ClasicoProps) {
return (
    <div className="clasicopag">
      <header className="navbar">
        <a className="volver" onClick={() => setPage("landing")}>
          <img src="/img/volver.png" alt="Logo" style={{ width: "152px", height: "78.24px" }}/>
        </a>
      </header>
        <h1 className="tituloclasico">PANCHO CLASICO</h1>
        <img src="/img/clasicog.png" alt="Logo" className="fotoclasico" style={{ width: "817px", height: "460px" }}/>
        <p className="descripcionclasico">
          Pancho con carne 100% de cerdo, papas pay y aderezo a eleccion. Suma un exclusivo auto F1 coleccionable por solo $6.999. Solo por tiempo limitado o hasta agotar stock
        </p>
        <button className="enviarclasico" onClick={() => setPage("pedido")}>Enviar pedido</button>
    </div>
)
}

export default Clasico;